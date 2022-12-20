import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date", default: "NOW()" })
  createdAt: Date;

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => Date, default: "NOW()" })
  updatedAt: Date;

  @Field()
  @Property({ type: "text" })
  title!: string;
}
