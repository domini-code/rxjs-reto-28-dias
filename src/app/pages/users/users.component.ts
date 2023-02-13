import { UsersService } from './users.service';
import { Component, inject } from '@angular/core';
import { tap, map } from 'rxjs';
import { User } from './user.interface';
import { countryCodes } from '@shared/mock_data/country-codes';
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
        map(users => {
         return users.map((user: User) => ({
            ...user,
            countryName: countryCodes[user.location.country] || "Unknown"
          }));
        }),
        tap((users:User[]) => this.users = users)
      )
      .subscribe()
  }
}
