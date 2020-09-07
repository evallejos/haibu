import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() name = new EventEmitter<string>();
  searchForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: ['', null],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }

    this.name.emit(this.searchForm.value.name);
  }
}
