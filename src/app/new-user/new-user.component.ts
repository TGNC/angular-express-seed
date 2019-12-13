import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async sendFetchRequest(value): Promise<void> {
    await fetch('http://localhost:3000/new-user', {
      method: 'post',
      body: JSON.stringify(value)
    });
  }

  async addUser(form: any) {
    this.sendFetchRequest(form.value);

    console.log('form', form.value);
  }
}
