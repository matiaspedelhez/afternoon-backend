import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  handle: string;
  @Column()
  type: "retail" | "wholesale";
  @Column()
  stock: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  hightlights: string;
  @Column()
  details: string;
  @Column()
  reviewsNumber: number;
  @Column()
  imageUrl1: string;
  @Column()
  imageUrl2: string;
  @Column()
  imageUrl3: string;
  @Column()
  imageUrl4: string;
  @Column()
  minVariantPrice: string;
  @Column()
  maxVariantPrice: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
