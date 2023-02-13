import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, switchMap } from 'rxjs';
import { SearchService } from './search.service';
import { User } from '@pages/users/user.interface';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm$ = new Subject<string>();
  results$!: Observable<User>;
  private searchSvc = inject(SearchService);

  constructor() {
    this.results$ = this.searchTerm$.pipe(
      switchMap((term:string) => this.searchSvc.search$(term))
    )
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

}
