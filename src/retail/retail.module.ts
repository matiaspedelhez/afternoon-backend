import { Module } from "@nestjs/common";
import { RetailService } from "./retail.service";
import { RetailController } from "./retail.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Retail } from "./entities/retail.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Retail])],
  controllers: [RetailController],
  providers: [RetailService],
})
export class RetailModule {}
