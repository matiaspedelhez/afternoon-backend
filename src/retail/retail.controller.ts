import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { RetailService } from "./retail.service";
import { Retail } from "./entities/retail.entity";

@Controller("retail")
export class RetailController {
  constructor(private readonly retailService: RetailService) {}

  @Get()
  async findAll(): Promise<Retail[]> {
    return this.retailService.findAll();
  }

  @Get(":handle")
  async findOne(@Param("handle") handle: string): Promise<Retail | undefined> {
    return this.retailService.findOneByHandle(handle);
  }
}
