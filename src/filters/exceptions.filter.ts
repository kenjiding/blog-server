import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    console.log('exception: ', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : exception;

    // Log the error with a unique request id for tracing
    const requestId = request.headers['x-request-id'] || 'N/A';
    this.logger.error(
      `Request ID: ${requestId} - Error: ${JSON.stringify(message)}`,
    );

    // Customize the error response based on the exception type
    let errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    };

    if (exception instanceof HttpException) {
      errorResponse.message = (message as any).message || message;
    } else {
      // Log the full error stack if it's not an HTTP exception (e.g., unexpected errors)
      this.logger.error(exception);
    }

    // Send the error response
    response.status(status).json(errorResponse);
  }
}
