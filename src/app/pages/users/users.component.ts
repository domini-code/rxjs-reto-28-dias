import { UsersService } from './users.service';
import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { User } from './user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users!: User[];

  private usersSvc = inject(UsersService);

  constructor() {
    this.usersSvc.getUsers$()
      .pipe(
        tap((users: User[]) => console.log(users)),
        tap((users:User[]) => this.users = users)
      )
      .subscribe()
  }
}
