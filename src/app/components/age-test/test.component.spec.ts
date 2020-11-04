import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestComponent} from './test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../../services/form.service';
import {By} from '@angular/platform-browser';
import Spy = jasmine.Spy;

describe('TestComponent', () => {
  let component: TestComponent;
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
    formService = TestBed.get(FormService);
    component = fixture.componentInstance;
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
      component.testForm.controls.name.setValue('');
      component.testForm.controls.age.setValue(-1);
      expect(component.testForm.valid).toBeFalsy();

      // TODO - Test the form to be invalid if only one input is empty while the other is filled in
    });

    it('should be valid', () => {
      // TODO - Test the form to be valid if all inputs are filled in correctly
      component.testForm.controls.name.setValue('Milan');
      component.testForm.controls.age.setValue(15);
      expect(component.testForm.valid).toBeTruthy();
    });

    it('should call to the formService with the right data when onSubmit is called', () => {
      // TODO - Spy on the formService to components if the onSubmit method sends the right data.
      // Do this by creating a spy on the service method which returns mock data
      // Also components if the method has not been called yet before you submit the form.
      submitFormDetailsSpy = spyOn(formService, 'submitFormDetails');

      expect(submitFormDetailsSpy).not.toHaveBeenCalled();
      component.testForm.controls.age.setValue(25);
      component.onSubmit();

      expect(submitFormDetailsSpy).toHaveBeenCalled();
    });
  });

  describe('The born Year', () => {
    it('should set the yearOfBirth variable when it retrieves it from the FormService', () => {

    });

    it('should return true if the year is even', () => {
      // TODO - Test if the isBirthYearEven method returns true when the yearOfBirth is even
      component.yearOfBirth = 2;
      expect(component.isBirthYearEven()).toBeTruthy();
    });

    it('should return false if the year is odd', () => {
      // TODO - Test if the isBirthYearEven method returns true when the yearOfBirth is odd
      component.yearOfBirth = 1;
      expect(component.isBirthYearEven()).toBeFalsy();
    });

    it('should display the "odd-year" class when the year is odd', () => {
      // TODO components if the paragraph has the correct class when the year is odd.
      component.yearOfBirth = 1;
      fixture.detectChanges();
      const paragraph = fixture.debugElement.query(By.css('#year-of-birth'));
      expect(paragraph.classes['odd-year']).toBeTruthy();
    });

    it('should set the yearOfBirth variable when a value is emitted in the FormsService', () => {
      // TODO - Test the subscription of the yearOfBirth subject and the yearOfBirth variable.
      // Reset the yearOfBirthVariable to undefined
      component.yearOfBirth = undefined;

      // Test if the yearOfBirth value gets set when a value is emitted in the formService
      formService.subject.next(1940);
      expect(component.yearOfBirth).toEqual(1940);
    });
  });

});
