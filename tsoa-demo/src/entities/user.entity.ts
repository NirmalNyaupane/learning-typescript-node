import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import CommonEntity from ".";
import { Profile } from "./profile.entity";
import { Education } from "./education.entity";
import bcrypt from "bcryptjs";

@Entity("user")
export class UserEntity extends CommonEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "full_name", nullable: false })
  fullName: string;

  @Column({ name: "email", nullable: false })
  email: string;

  @Column({ name: "password", nullable: false })
  password: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Education, (education) => education.user)
  education: string[];

  @BeforeInsert()
  hashPassword() {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash("Nir", salt, (err, hash) => {
        this.password = hash;
      });
    });
  }
}
