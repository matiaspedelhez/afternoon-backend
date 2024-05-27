import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Retail {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  handle: string;
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
}
