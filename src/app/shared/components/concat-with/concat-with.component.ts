import {  DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { tap, } from 'rxjs';

@Component({
  selector: 'app-concat-with',
  templateUrl: './concat-with.component.html',
  styleUrls: ['./concat-with.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ConcatWithComponent implements OnInit {
  private dataSvc = inject(DataService);

  ngOnInit() {
    this.dataSvc.getData()
      .pipe(
        tap(res => console.log(res))
      )
      .subscribe()

  }
}
