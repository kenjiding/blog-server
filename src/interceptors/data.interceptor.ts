import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { format } from 'date-fns';

@Injectable()
export class DataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => this.transformDate(data)),
    );
  }

  transformDate(data: any): any {
    if (Array.isArray(data)) {
      return data.map(item => this.transformDate(item));
    } else if (data !== null && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        if (data[key] instanceof Date) {
          data[key] = format(data[key], 'yyyy-MM-dd HH:mm:ss');
        } else if (typeof data[key] === 'object') {
          this.transformDate(data[key]);
        }
      });
    }
    return data;
  }
}
