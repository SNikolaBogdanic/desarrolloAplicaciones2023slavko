import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({
        nullable: true
    })
    email: string;

    @Column({
        nullable: true,
    })
    phone: number;

    validatePassword(password: string): boolean {
        return this.password === password;
    }

    getInfoToToken(){
        return {
            id: this.id,
            username: this.username,
            email: this.email
        }

    }
}
