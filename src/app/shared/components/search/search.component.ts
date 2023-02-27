import { Character } from './../../interfaces/character.interface';
import { RickMortyDataService } from '@shared/services/rick-morty-data.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Observable,
  Subject,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs';

import { customOperator } from './custom-operator';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm$ = new Subject<string>();
  characters$!: Observable<Character[]>;
  private filterSvc = inject(RickMortyDataService);

  constructor() {
    this.characters$ = this.searchTerm$.pipe(
      customOperator(
        (term: string) => term.length >= 4,
        500,
        (prev, curr) => prev === curr
      ),
      switchMap((term: string) => this.filterSvc.filterCharacter(term))
    );
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

}
