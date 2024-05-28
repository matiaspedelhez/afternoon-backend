import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { existsSync } from "fs";
import { DatabaseModule } from "./database/database.module";
import { ProductModule } from "./product/product.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: existsSync("/.env"),
      envFilePath: ".env",
    }),
    DatabaseModule,
    ProductModule,
  ],
})
export class AppModule {}
