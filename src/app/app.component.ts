import { Component, OnInit } from '@angular/core';
import { TableService, Users } from "./services/table.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'firstfive';
  titles = ['Number in line', 'Full name', 'Check-in time'];
  selectedUsers!: Users[];
  users!: Users[];

  constructor(private tableService: TableService) {}
  ngOnInit(): void {
    this.tableService.getData().subscribe({
      next: (data: Users[]) => {
        this.users = data;
    }
    })
  }

  nextClient() {
    this.selectedUsers = this.users;
    this.users = [];
    // this.tableService.update(this.users).subscribe({
    //   next:(res) => {
    //     console.log('reeeeeeee',res);
    //   }
    // })
  }
  addUsers(users: Users) {
    this.users.push(users);
  }
}
