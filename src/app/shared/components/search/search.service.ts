import { Injectable } from '@angular/core';
import { User } from '@pages/users/user.interface';
import { users } from '@shared/mock_data/users-data';
import { EMPTY, of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {


  search$(user: string): Observable<User> {
    const found = users.find((item: User) => item.name === user);
    return found ? of(found) : EMPTY
  }

}
