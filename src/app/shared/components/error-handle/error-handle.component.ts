import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RickMortyDataService } from '@shared/services/rick-morty-data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ErrorHandleComponent implements OnInit {
  private rickyMortyDataSvc = inject(RickMortyDataService);

  ngOnInit() {
    this.rickyMortyDataSvc
      .getData()
      .pipe(tap((res) => console.log('Res tap', res)))
      .subscribe({
        error: (error)=> console.log('Error Subscribe', error)
      });
  }
}
