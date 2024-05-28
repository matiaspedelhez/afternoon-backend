import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly retailRepository: Repository<Product>
  ) {}

  async findAll(): Promise<Product[]> {
    const allProducts = await this.retailRepository.find();

    if (allProducts.length === 0) {
      throw new NotFoundException("No products found");
    }

    return allProducts;
  }

  async findByType(type: "retail" | "wholesale"): Promise<Product[]> {
    const products = await this.retailRepository.find({
      where: { type: type },
    });

    if (products.length === 0) {
      throw new NotFoundException(`No products found in category ${type}.`);
    }

    return products;
  }

  async findAllHandles(type: "retail" | "wholesale"): Promise<string[]> {
    const products = await this.retailRepository.find({
      select: ["handle"],
      where: { type: type },
    });

    if (products.length === 0) {
      throw new NotFoundException(`No products found in category ${type}.`);
    }

    return products.map((retail) => retail.handle);
  }

  async findOneByHandle(handle: string): Promise<Product | undefined> {
    const product = this.retailRepository.findOne({ where: { handle } });

    if (!(await product)?.id) {
      throw new NotFoundException(`No products found with handle "${handle}".`);
    }

    return product;
  }

  async findOneByID(id: string): Promise<Product | undefined> {
    const product = this.retailRepository.findOne({ where: { id } });

    if (!(await product)?.id) {
      throw new NotFoundException(`No products found with ID "${id}".`);
    }

    return product;
  }
}
