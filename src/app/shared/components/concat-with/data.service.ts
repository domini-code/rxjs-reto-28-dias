import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  concatWith } from 'rxjs';

export interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly baseAPI = 'https://jsonplaceholder.typicode.com/todos';
  private readonly http = inject(HttpClient);

  getData(): Observable<User> {
    const obs1 = this.http.get<User>(`${this.baseAPI}/1`);
    const obs2 = this.http.get<User>(`${this.baseAPI}/2`);
    return obs1.pipe(
      concatWith(obs2)
    );
  }
}
