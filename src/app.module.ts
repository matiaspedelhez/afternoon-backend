import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { existsSync } from "fs";
import { DatabaseModule } from "./database/database.module";
import { RetailModule } from './retail/retail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: existsSync("/.env"),
      envFilePath: ".env",
    }),
    DatabaseModule,
    RetailModule,
  ],
})
export class AppModule {}
