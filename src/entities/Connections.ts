import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { v4 as uuid} from "uuid"

@Entity("connections")
class Connections{
    @PrimaryColumn()
    id: string

    @Column()
    admin_id:string

    @JoinColumn({name: "user_id"})
    @ManyToOne(()=>Users)
    user: Users

    @Column()
    user_id:string

    @Column()
    socket_id:string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { Connections }