import { HttpClient } from '@angular/common/http';
import {
  catchError,
  map,
  Observable,
  of,
  throwError,
  EMPTY,
  retry,
  share,
  ReplaySubject,
} from 'rxjs';
import { Injectable, inject } from '@angular/core';
import {
  Character,
  ResponseInfoResults,
} from '@shared/interfaces/character.interface';

const mockCharacter = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/2',
  created: '2017-11-04T18:50:21.651Z',
};


@Injectable({
  providedIn: 'root',
})
export class RickMortyDataService {
  private readonly http = inject(HttpClient);

  getData(): Observable<Character[]> {
    return this.http
      .get<ResponseInfoResults>('https://rickandmortyapi.com/api/character')
      .pipe(
        retry(1),
        map((res: ResponseInfoResults) => res?.results),
        share(),
        catchError(() => EMPTY)
        // catchError(()=> throwError(() => new Error('Ups something happened')))
        // catchError(()=> of([mockCharacter]))
      );
  }

  filterCharacter(name: string): Observable<Character[]>{
    const API = `https://rickandmortyapi.com/api/character/?name=${name}`;
    return this.http.get<ResponseInfoResults>(API).pipe(
      map((res: ResponseInfoResults) => res?.results),
      catchError(() => EMPTY)
    );
  }


}
