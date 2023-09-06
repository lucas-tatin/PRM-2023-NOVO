import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService{



    profile(){
        return{
            fullname: 'Jair Bolsonaro',
            username: 'Bolsonaro',
            description: 'Presidente do Brasil',
            createdAt: '2022-08-22',
            
        }
    }

}