import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSubTitle1730107104071 implements MigrationInterface {
    name = 'AddSubTitle1730107104071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` ADD \`subTitle\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` DROP COLUMN \`subTitle\``);
    }

}
