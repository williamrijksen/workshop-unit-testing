import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonTableComponent} from './person-table.component';
import {PersonService} from '../../services/person/person.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import createSpyObj = jasmine.createSpyObj;

describe('PersonTableComponent', () => {
  let component: PersonTableComponent;
  let fixture: ComponentFixture<PersonTableComponent>;
  let personService: PersonService;
  const personServiceSpy = createSpyObj(
    'PersonService',
    ['getPersons', 'getAllValidatedPersons', 'deletePerson']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonTableComponent],
      providers: [
        {
          provide: PersonService,
          useValue: personServiceSpy
        }],
      imports: [MatSnackBarModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTableComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to the personService.getPersons method', () => {
    // TODO: Test that the personService.getPersons method is called when executing the component's getPersons method.
  });

  it('should call to the personService.getValidated persons method', () => {
    // TODO: Test that the personService.getValidatedPersons method is called when executing the component's getValidatedPersons method.
  });

  it('should call the service with the correct ID', () => {
    // TODO: Create a Mock for the personService.deletePerson by using the provided spy, and setup a return value.
    // TODO: Test that personService.deletePerson method is called with the correct ID when executing the component's deleteFromList method.
  });
});
