import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPersonComponent} from './add-person.component';
import createSpyObj = jasmine.createSpyObj;
import {PersonService} from '../../services/person/person.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Observable, of} from 'rxjs';
import {LoggingService} from '../../services/logging/logging.service';
import {Person} from '../../models/person';
import {By} from '@angular/platform-browser';

describe('AddPersonComponent', () => {
  // Setup Variables
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;
  let personService: PersonService;
  let loggingService: LoggingService;

  // Mock Data
  const mockPerson = new Person();
  mockPerson.id = 1;
  mockPerson.avatar = 'url_here';
  mockPerson.name = 'Theo Test';
  mockPerson.isValidated = true;
  mockPerson.createdAt = new Date();
  // Spy Objects
  const personServiceSpy = createSpyObj(
    'PersonService',
    ['postPerson']);
  const loggingServiceSpy = createSpyObj('LoggingService', ['logError', 'logMessage']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPersonComponent],
      providers: [
        {
          provide: PersonService,
          useValue: personServiceSpy
        },
        {
          provide: LoggingService,
          useValue: loggingServiceSpy
        }],
      imports: [MatSlideToggleModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService);
    loggingService = TestBed.inject(LoggingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form validity', () => {
    // TODO: Write tests that test several invalid/valid states of the form.

    it('should be valid', () => {
      // Test multiple cases where the form should be valid. Think of edge cases etc.
      component.addPersonForm.controls.name.setValue('Milan');
      component.addPersonForm.controls.dateOfBirth.setValue(new Date(1994, 4, 24));
      component.addPersonForm.controls.isValidated.setValue(true);
      component.addPersonForm.controls.avatar.setValue('https://imageskincare.nl/media/home/stores/1/IMAGE-Collection.jpg');
      expect(component.addPersonForm.valid).toBeTruthy();
    });

    // TODO Test multiple cases where the form should be invalid.
    // Take a look at all Validators used in the createForm method, and make sure all those are tested here.
    it('should be invalid', () => {
      component.addPersonForm.controls.name.setValue('Milan');
      component.addPersonForm.controls.dateOfBirth.setValue(new Date(1894, 4, 24));
      component.addPersonForm.controls.isValidated.setValue(true);
      component.addPersonForm.controls.avatar.setValue('https://imageskincare.nl/media/home/stores/1/IMAGE-Collection.jpg');
      expect(component.addPersonForm.valid).toBeFalsy();

      component.addPersonForm.controls.name.setValue('');
      component.addPersonForm.controls.dateOfBirth.setValue(new Date(1994, 4, 24));
      component.addPersonForm.controls.isValidated.setValue(true);
      component.addPersonForm.controls.avatar.setValue('https://imageskincare.nl/media/home/stores/1/IMAGE-Collection.jpg');
      expect(component.addPersonForm.valid).toBeFalsy();

      component.addPersonForm.controls.name.setValue('Milan');
      component.addPersonForm.controls.dateOfBirth.setValue(new Date(1994, 4, 24));
      component.addPersonForm.controls.isValidated.setValue(true);
      component.addPersonForm.controls.avatar.setValue('');
      expect(component.addPersonForm.valid).toBeFalsy();

      component.addPersonForm.controls.name.setValue('thisIsAVeryLongNameThatshouldntBeValidForTheForm');
      component.addPersonForm.controls.dateOfBirth.setValue(new Date(1994, 4, 24));
      component.addPersonForm.controls.isValidated.setValue(true);
      component.addPersonForm.controls.avatar.setValue('https://imageskincare.nl/media/home/stores/1/IMAGE-Collection.jpg');
      expect(component.addPersonForm.valid).toBeFalsy();
    });
  });

  it('should toggle visibility', () => {
    // TODO test that the form visibility will be set.
    component.toggleFormVisibility({checked: true});
    expect(component.formVisible).toBeTruthy();

    component.toggleFormVisibility({checked: false});
    expect(component.formVisible).toBeFalsy();
  });

  describe('submitting the form', () => {
    // This beforeEach will be executed before every test scenario in this describe.
    beforeEach(() => {
      // Use this beforeEach to set the form values for the tests.
      // Take a look at the 'form should be valid' tests to use that code & data :-).
      component.addPersonForm.controls.name.setValue('Milan');
      component.addPersonForm.controls.dateOfBirth.setValue(new Date(1994, 4, 24));
      component.addPersonForm.controls.isValidated.setValue(true);
      component.addPersonForm.controls.avatar.setValue('https://imageskincare.nl/media/home/stores/1/IMAGE-Collection.jpg');

      // Maybe it's a good idea to also setup our return value for our mock(s) here?
      // This can also be done after writing the test, and seeing what fails if you're unsure what to mock.
      personServiceSpy.postPerson.and.returnValue(of(mockPerson));
    });

    it('should call the postPerson method', () => {
      // TODO: Test that the postPerson method is called with the correct (expected) data.
      component.onSubmit();
      expect(personServiceSpy.postPerson).toHaveBeenCalledWith({
        name: 'Milan',
        dateOfBirth: new Date(1994, 4, 24),
        isValidated: true,
        avatar: 'https://imageskincare.nl/media/home/stores/1/IMAGE-Collection.jpg'
      });
    });

    it('should call the loggingService on success', () => {
      // TODO: Test that the loggingService is called on success with the correct message
      component.onSubmit();
      expect(loggingServiceSpy.logMessage).toHaveBeenCalledWith('posted person with id 1');
    });

    it('should set submitted to true and show a message', () => {
      // TODO: Test that submitted state is true and a message is shown in the component.
      // Remember: To test the DOM you need to detectChanges after changing component data.
      component.onSubmit();
      expect(component.submitted).toBeTruthy();
      fixture.detectChanges();
      const message = fixture.debugElement.query(By.css('#submitted-message'));
      expect(message).toBeTruthy();
    });
  });
});
