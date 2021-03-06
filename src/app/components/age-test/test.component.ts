import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form/form.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public testForm: FormGroup;
  public initialValues = {
    name: '',
    age: 0
  };
  public yearOfBirth: number;

  constructor(private formService: FormService) {
    this.createForm();
  }

  ngOnInit() {
    this.formService.subject.subscribe(value => {
      this.yearOfBirth = value;
    });
  }

  onSubmit() {
    this.formService.submitFormDetails(this.testForm.value.age);
  }

  private createForm() {
    this.testForm = new FormGroup({
      name: new FormControl(this.initialValues.name, [Validators.required, Validators.minLength(2)]),
      age: new FormControl(this.initialValues.age, [Validators.required, Validators.min(1), Validators.max(110)])
    });
  }

  public isBirthYearEven(): boolean {
    return this.yearOfBirth % 2 === 0;
  }
}
