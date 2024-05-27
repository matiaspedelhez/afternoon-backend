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

  async findAllHandles(): Promise<string[]> {
    const retails = this.retailRepository.find({ select: ["handle"] });
    return (await retails).map((retail) => retail.handle);
  }

  async findOneByHandle(handle: string): Promise<Retail | undefined> {
    return this.retailRepository.findOne({ where: { handle } });
  }

  async findOneByID(id: string): Promise<Retail | undefined> {
    return this.retailRepository.findOne({ where: { id } });
  }
}
