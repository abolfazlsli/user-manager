import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
    {
        "id": 1,
        "username": "admin1",
        "email": "admin1@example.com",
        "password": "hashed_password_1",
        "created_at": "2023-01-01T12:00:00Z",
        "is_active": true,
        "role": "admin"
    },
    {
        "id": 2,
        "username": "user1",
        "email": "user1@example.com",
        "password": "hashed_password_2",
        "created_at": "2023-01-02T12:00:00Z",
        "is_active": true,
        "role": "user"
    },
    {
        "id": 3,
        "username": "admin2",
        "email": "admin2@example.com",
        "password": "hashed_password_3",
        "created_at": "2023-01-03T12:00:00Z",
        "is_active": false,
        "role": "admin"
    },
    {
        "id": 4,
        "username": "user2",
        "email": "user2@example.com",
        "password": "hashed_password_4",
        "created_at": "2023-01-04T12:00:00Z",
        "is_active": true,
        "role": "user"
    },
    {
        "id": 5,
        "username": "admin3",
        "email": "admin3@example.com",
        "password": "hashed_password_5",
        "created_at": "2023-01-05T12:00:00Z",
        "is_active": true,
        "role": "admin"
    }
]
    findAll(role?: "USER" | "ADMIN") {
        if (role){
            return this.users.filter(
                (item1) => item1.role.toUpperCase() === role.toUpperCase()
            )
        }
        return this.users
    }
    findOne (id:number) {
        return this.users.find(item => item.id === id)
    }
    create (user : {"id": number,"username": string,"email": string,"password":string,"created_at":string,"is_active": boolean,"role": string}){
        this.users.push(user)
        return {
            data : "users added " + user
        }
    }
    update (id : number , updatedUser : { "username"?: string,"email"?: string,"password"?: string,"created_at"?: string,"is_active"?: boolean,"role"?: "USER" | "ADMIN"}) {
        this.users.map(item => {
            if (item.id === id){
                return {...this.users , updatedUser}
            }
            return item
        })
        return this.findOne(id)
    }
    remove (id: number) {
        this.users = this.users.filter(user => user.id !== id)
        return this.findOne(id)
    }
}
