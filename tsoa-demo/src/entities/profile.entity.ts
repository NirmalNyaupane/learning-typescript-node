import { Column, Entity } from "typeorm";
import CommonEntity from ".";

@Entity("profile")
export class Profile extends CommonEntity {
  @Column({ name: "phone", nullable: false })
  phone: string;

  @Column({ name: "date_of_birth", type: "timestamp", nullable: false })
  dateOfBirth: string;

  @Column({ name: "skills", type: "simple-array", nullable: false })
  skills: string[];

  @Column({ name: "about", nullable: false })
  about: string;
}

