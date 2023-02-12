import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { users} from '@shared/mock_data/users-data';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers$(): Observable<User[]>{
    return of(users);
  }

}
