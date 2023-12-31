import { Column, Entity, ManyToOne } from "typeorm";
import CommonEntity from ".";
import { UserEntity } from "./user.entity";

@Entity("Education")
export class Education extends CommonEntity {
  @Column({ name: "college_name", nullable: false })
  collegeName: string;

  @Column({ name: "degree", nullable: false })
  degree: string;

  @Column({
    name: "start_date",
    nullable: true,
    type: "time without time zone",
  })
  startDate: string;

  @ManyToOne(() => UserEntity, (user) => user.education, { cascade: true })
  user: UserEntity;
}
