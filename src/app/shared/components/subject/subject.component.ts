import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SubjectComponent {
  mySubject = new Subject<string>();
}
