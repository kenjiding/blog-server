import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTextAndDate1730106427724 implements MigrationInterface {
  name = 'AddTextAndDate1730106427724'
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`tips\` \`tips\` varchar(255) NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`image\` \`image\` varchar(255) NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone\``);
    await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone\` varchar(255) NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`birthday\``);
    await queryRunner.query(`ALTER TABLE \`users\` ADD \`birthday\` varchar(255) NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`create_time\` \`create_time\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`update_time\` \`update_time\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`update_time\` \`update_time\` timestamp(0) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`create_time\` \`create_time\` timestamp(0) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`birthday\``);
    await queryRunner.query(`ALTER TABLE \`users\` ADD \`birthday\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone\``);
    await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone\` varchar(200) NULL`);
    await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`image\` \`image\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`tips\` \`tips\` varchar(255) NULL`);
  }

}
