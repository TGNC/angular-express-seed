import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
    name: string;
    age: number;
    gender: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    constructor(private httpClient: HttpClient) {}

    users: User[];

    async ngOnInit(): Promise<void> {
        const result = await this.httpClient.get<any>('/users-data').toPromise();
        this.users = Array.isArray(result) ? result : [];
    }

}
