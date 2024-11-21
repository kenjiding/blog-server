import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveAuthor1730107006988 implements MigrationInterface {
    name = 'RemoveAuthor1730107006988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` DROP COLUMN \`author\``);
        await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`tips\` \`tips\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`image\` \`image\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`birthday\` \`birthday\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`birthday\` \`birthday\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`image\` \`image\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`tips\` \`tips\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`article\` ADD \`author\` varchar(255) NOT NULL`);
    }

}
