import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BehaviourSubjectComponent {
myBehaviourSubject = new BehaviorSubject<string>('Initial 2')
}
