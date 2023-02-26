import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Character } from '@shared/interfaces/character.interface';
import { RickMortyDataService } from '@shared/services/rick-morty-data.service';
import { tap, Observable } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AsyncComponent implements OnInit {
  data$!: Observable<Character[]>;

  private dataSvc = inject(RickMortyDataService);


  ngOnInit(): void {
    this.data$ = this.dataSvc.getData();
  }
}
