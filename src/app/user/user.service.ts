import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModel } from './user-models';


@Injectable()
export class UserService {

    private readonly API_URL = `${environment.apiUrl}users/`;

    constructor(private httpClient: HttpClient) { }

  
    getAllUsers() {
        return this.httpClient.get<any>(this.API_URL);
    }

    loginOrRegister(data:UserModel) {
        return this.httpClient.post(this.API_URL, data);
    }

    patchUser(userId,data) {
        return this.httpClient.put<any>(this.API_URL + userId ,data);
    }

    
}
