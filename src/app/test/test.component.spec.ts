import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestComponent} from './test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../form.service';
import {By} from '@angular/platform-browser';
import Spy = jasmine.Spy;

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let formService: FormService;
  let submitFormDetailsSpy: Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    formService = TestBed.get(FormService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('The form', () => {
    it('should be invalid', () => {
      //TODO - Test the form to be invalid if inputs are empty

      //TODO - Test the form to be invalid if only one input is empty while the other is filled in
    });

    it('should be valid', () => {
      //TODO - Test the form to be valid if all inputs are filled
    });

    it('should call to the formService with the right data when onSubmit is called', () => {
      //TODO - Spy on the formService to test if the onSubmit method sends the right data.
      //Do this by creating a spy on the service method which returns mock data
      //Also test if the method has not been called yet before you submit the form.
    });
  });

  describe('The born Year', () => {
    it('should return true if the year is even', () => {
      //TODO - Test if the isBirthYearEven method returns true when the yearOfBirth is even
    });

    it( 'should return false if the year is odd', () => {
      //TODO - Test if the isBirthYearEven method returns false when the yearOfBirth is odd
    });

    it('should display the "odd-year" class when the year is odd', () => {
      //TODO test if the paragraph has the correct class when the year is odd.
      //Do this by using the fixture and querying the html element you want to test
    });

    it('should set the yearOfBirth variable when a value is emitted in the FormsService' ,() => {
      //TODO - Test the subscription of the yearOfBirth subject and the yearOfBirth variable.
      //Reset the yearOfBirthVariable to undefined

      //Test if the yearOfBirth value gets set when a value is emitted in the formService
    });
  });

});
