import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Retail } from "./entities/retail.entity";

@Injectable()
export class RetailService {
  constructor(
    @InjectRepository(Retail)
    private readonly retailRepository: Repository<Retail>
  ) {}

  async findAll(): Promise<Retail[]> {
    return this.retailRepository.find();
  }

  async findOneByHandle(handle: string): Promise<Retail | undefined> {
    return this.retailRepository.findOne({ where: { handle } });
  }
}
