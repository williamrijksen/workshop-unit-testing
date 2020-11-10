import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../services/person/person.service';
import {Observable} from 'rxjs';
import {Person} from '../../models/person';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent {
  public persons: Observable<Person[]>;

  constructor(private personService: PersonService, private snackbar: MatSnackBar) {
  }

  getPersons() {
    this.persons = this.personService.getPersons();
  }

  deleteFromList(id: number): void {
    this.personService.deletePerson(id)
      .subscribe(() => {
        this.snackbar.open('Person deleted from database', '', {
          duration: 1000
        });
        this.getPersons();
      });
  }

  getValidatedPersons() {
    this.persons = this.personService.getAllValidatedPersons();
  }
}
