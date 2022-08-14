import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class TodoListService {

    private readonly API_URL = `${environment.apiUrl}users/`;

    constructor(private httpClient: HttpClient) { }

    getTodoList(userId) {
        return this.httpClient.get<any>(this.API_URL + userId + '/todo-list');
    }

    addItem(userId,data) {
        return this.httpClient.post<any>(this.API_URL + userId + '/todo-list', data);
    }
    patchItem(userId,id,data) {
        return this.httpClient.put<any>(this.API_URL + userId + '/todo-list/'+id, data);
    }

    deleteItem(userId,id) {
        
        return this.httpClient.delete<any>(this.API_URL + userId + '/todo-list/'+ id);
    }


}
