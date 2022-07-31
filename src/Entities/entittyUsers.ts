import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
// interface T {}

@Entity()
export class Users extends BaseEntity {
  @PrimaryColumn()
  user_id!: number;

  @Column()
  user_name!: string;

  @Column("int", { array: true, default: [] })
  bank_accounts!: string[];
  // @Column()
  // password!: string;
}
