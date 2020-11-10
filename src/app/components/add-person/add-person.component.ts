import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../models/person';
import {PersonService} from '../../services/person/person.service';
import {LoggingService} from '../../services/logging/logging.service';
import {birthDateValidator} from '../../validators/birth-date.validator';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  constructor(public personService: PersonService, public loggingService: LoggingService) {
    this.createForm();
  }

  public addPersonForm: FormGroup;
  public initialValues: Person = {
    createdAt: new Date(),
    name: '',
    dateOfBirth: new Date('01-01-1990'),
    isValidated: false,
    avatar: ''
  };
  public submitted = false;
  public formVisible = false;

  public onSubmit(): void {
    this.personService.postPerson(this.addPersonForm.value)
      .subscribe((person) => {
        this.loggingService.logMessage('posted person with id ' + person.id);
        this.submitted = true;
      });
  }

  public toggleFormVisibility($event): void {
    this.formVisible = $event.checked;
  }

  private createForm(): void {
    this.addPersonForm = new FormGroup({
      name: new FormControl(this.initialValues.name, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      dateOfBirth: new FormControl(this.initialValues.dateOfBirth, [Validators.required, birthDateValidator]),
      isValidated: new FormControl(this.initialValues.isValidated, [Validators.required]),
      avatar: new FormControl(this.initialValues.avatar, [Validators.required, Validators.minLength(5)])
    });
  }
}
