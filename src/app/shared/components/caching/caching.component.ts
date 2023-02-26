import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Character } from '@shared/interfaces/character.interface';
import { RickMortyDataService } from '@shared/services/rick-morty-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-caching',
  templateUrl: './caching.component.html',
  styleUrls: ['./caching.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CachingComponent implements OnInit {
  data$!: Observable<Character[]>;

  private dataSvc = inject(RickMortyDataService);

  ngOnInit() {
     this.data$ = this.dataSvc.getData();
  }
}
