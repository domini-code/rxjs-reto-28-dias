import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { withLatestFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class WithLatestFromComponent implements OnInit {
  profileForm!: FormGroup;
  combinedValue$!: Observable<[string, string]> | undefined;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.initFormChanges();
  }

  private initFormChanges(): void {
    this.combinedValue$ = this.profileForm.get('lastName')?.valueChanges
      .pipe(
        withLatestFrom(this.profileForm.get('firstName')?.valueChanges as Observable<string>)
      )
  }

  private initForm() {
    this.profileForm = this.fb.group({
      firstName: ['', { nonNullable: true }],
      lastName: ['', { nonNullable: true }],
    });
  }
}
