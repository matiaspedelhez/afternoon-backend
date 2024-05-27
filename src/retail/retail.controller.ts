import { Controller, Get, Param } from "@nestjs/common";
import { RetailService } from "./retail.service";
import { Retail } from "./entities/retail.entity";

@Controller("retail")
export class RetailController {
  constructor(private readonly retailService: RetailService) {}

  @Get()
  async findAll(): Promise<Retail[]> {
    return this.retailService.findAll();
  }

  @Get("handles")
  async findAllHandles(): Promise<String[]> {
    return this.retailService.findAllHandles();
  }

  @Get("handle/:handle")
  async findOneByHandle(
    @Param("handle") handle: string
  ): Promise<Retail | undefined> {
    return this.retailService.findOneByHandle(handle);
  }

  @Get("id/:id")
  async findOneByID(@Param("id") id: string): Promise<Retail | undefined> {
    return this.retailService.findOneByID(id);
  }
}
