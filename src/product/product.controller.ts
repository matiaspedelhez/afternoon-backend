import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Query,
  UsePipes,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./entities/product.entity";
import { ValidateTypePipe } from "src/validate-type-pipe/validate-type-pipe.pipe";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(
    @Query("type") type: "retail" | "wholesale"
  ): Promise<Product[]> {
    if (type) {
      return this.productService.findByType(type);
    }
    return this.productService.findAll();
  }

  @Get("handles")
  @UsePipes(new ValidateTypePipe())
  async findAllHandles(@Query() query): Promise<String[]> {
    return this.productService.findAllHandles(query.type);
  }

  @Get("handle/:handle")
  async findOneByHandle(
    @Param("handle") handle: string
  ): Promise<Product | undefined> {
    return this.productService.findOneByHandle(handle);
  }

  @Get("id/:id")
  async findOneByID(
    @Param("id", new ParseUUIDPipe()) id: string
  ): Promise<Product | undefined> {
    return this.productService.findOneByID(id);
  }
}
