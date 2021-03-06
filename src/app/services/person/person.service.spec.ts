import {TestBed} from '@angular/core/testing';

import {PersonService} from './person.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Person} from '../../models/person';
import {LoggingService} from '../logging/logging.service';
import createSpyObj = jasmine.createSpyObj;

describe('PersonService', () => {
  let service: PersonService;
  let loggingService: LoggingService;
  const loggingServiceSpy = createSpyObj('LoggingService', ['logError', 'logMessage']);
  let httpMock: HttpTestingController; // This will be our variable to manipulate http calls.

  // The variables below are mockingVariables that you can use.
  // It is good practice to define these as constants at the top of your test if they are used multiple times.
  // If mocking variables are only used once, define them as a local variable in the test scenario.
  const errorCode = 'Request failed';
  const mockErrorResponse = {
    status: 400,
    statusText: 'Bad Request',
    message: 'Oopsie'
  }; // This can be used as a mock error in following tests.

  const validatedMockPerson: Person = {
    avatar: 'https://i.imgur.com/XYbGAjz.jpg',
    createdAt: new Date(),
    dateOfBirth: new Date(),
    id: 1,
    isValidated: true,
    name: 'Dante Basco'
  };

  const unvalidatedMockPerson: Person = {
    avatar: 'https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047',
    createdAt: new Date(),
    dateOfBirth: new Date(),
    id: 2,
    isValidated: false,
    name: 'Toph Beifong'
  };

  beforeEach(() => TestBed.configureTestingModule({
    /*
    The HttpClientTestingModule is used to be able to mock Http Calls.
    Only use this import if the file you're testing really uses the HttpClient.
    IMPORTANT: If you're testing a component, you should always mock the service, not the HttpClient!
    */
    imports: [HttpClientTestingModule],
    providers: [{
      provide: LoggingService,
      useValue: loggingServiceSpy
    }]
  }));

  beforeEach(() => {
    loggingService = TestBed.inject(LoggingService);
    service = TestBed.inject(PersonService); // Assign a 'testing instance' of the service to a variable.
    httpMock = TestBed.inject(HttpTestingController); // Assign our HTTP Mock variable to be a HttpTestingController.
  });

  afterEach(() => {
    // This is good practice to do as it clears any unfinished httpCalls after executing the tests.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do a call to the correct endpoint', () => {
    // TODO: Write a test that checks that a single call is made to the persons endpoint with getPersons().
  });

  it('should retry once after a first failed attempt', () => {
    // TODO: Write a test that makes sure that after a failed http call with getPersons(), it will be retried once.

    // Hint: Use the expectOne method. (notice that it only expects one request, and this test needs 2)
  });

  it('should log and throw an error if the second attempt also fails', () => {
    // TODO: Write a test that makes sure an error is logged and thrown after a second attempt fails.
  });

  it('should only return validated users', () => {
    // TODO: Write a test for the getAllValidatedPersons method. Test that it only returns validated users.
    // For this, you need to test both that: (are unvalidated persons not coming through?) and (are validated persons not left out?)
  });

  it('should do a delete call', () => {
    // TODO: Write a tests which verifies that the correct url is called with the deletePerson method.
  });
});
