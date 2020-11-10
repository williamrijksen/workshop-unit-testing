import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestComponent} from './test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../../services/form/form.service';
import {By} from '@angular/platform-browser';
import Spy = jasmine.Spy;
import {DebugElement} from '@angular/core';

describe('TestComponent', () => {
  let component: TestComponent;
  let debugInstance: DebugElement;
  let fixture: ComponentFixture<TestComponent>;
  let formService: FormService;
  let submitFormDetailsSpy: Spy;

  /*
  Test files always start with a beforeEach. This is where the TestBed (https://angular.io/api/core/testing/TestBed) is set up.
  In here, we can make sure we have the correct declarations, imports and define our mocks.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  /*
  It is good practice to use a separate (async) beforeEach for configuring the testingModule,
  and another one for setting our initial variables.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    formService = TestBed.inject(FormService);
    // This is the instance of the component. This can be used to execute methods and control the component.
    component = fixture.componentInstance;

    // This is the debugElement, it can be used to control the actual rendered component.
    debugInstance = fixture.debugElement;

    // This method triggers a change detection cycle in the component.
    fixture.detectChanges();
  });

  /*
  We use describe() to describe a certain feature, such as the form itself.
  */
  describe('The form', () => {
    /*
    We use it() to describe a scenario. Always write this in present time as a grammatically correct sentence.
    In this case 'The form should be invalid'
     */
    it('should be invalid', () => {
      // TODO - Test the form to be invalid if inputs are empty
      // For validity of forms, you want to test normal cases AND edge cases, such as the limits of the validators.
    });

    it('should be valid', () => {
      // TODO - Test the form to be valid if all inputs are filled in correctly
    });

    it('should call to the formService with the right data when onSubmit is called', () => {
      // TODO - Spy on the formService to components if the onSubmit method sends the right data.
      // Do this by creating a spy on the service method.
      // Also components if the method has not been called yet before you submit the form.
    });
  });

  describe('The born Year', () => {
    it('should set the yearOfBirth variable when it retrieves it from the FormService', () => {
      // TODO - Test that the yearOfBirth variable is set when the formService emits a new value.
    });

    it('should return true if the year is even', () => {
      // TODO - Test if the isBirthYearEven method returns true when the yearOfBirth is even
    });

    it('should return false if the year is odd', () => {
      // TODO - Test if the isBirthYearEven method returns true when the yearOfBirth is odd
    });

    it('should display the "odd-year" class when the year is odd', () => {
      // TODO test if the paragraph has the correct class when the year is odd.
    });

    it('should set the yearOfBirth variable when a value is emitted in the FormsService', () => {
      // TODO - Test the subscription of the yearOfBirth subject and the yearOfBirth variable.
      // Reset the yearOfBirthVariable to undefined

      // Test if the yearOfBirth value gets set when a value is emitted in the formService
    });
  });

});
