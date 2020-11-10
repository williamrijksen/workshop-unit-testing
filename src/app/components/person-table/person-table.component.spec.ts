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
    component.getPersons();
    expect(personService.getPersons).toHaveBeenCalled();
  });

  it('should call to the personService.getValidated persons method', () => {
    component.getValidatedPersons();
    expect(personService.getAllValidatedPersons).toHaveBeenCalled();
  });

  it('should call the service with the correct ID', () => {
    personServiceSpy.deletePerson.and.returnValue(new Observable());
    personService.deletePerson(1);
    component.deleteFromList(1);
    expect(personService.deletePerson).toHaveBeenCalledWith(1);
  });
});
