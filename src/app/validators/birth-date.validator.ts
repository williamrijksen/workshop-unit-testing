import {AbstractControl} from '@angular/forms';

// Custom validator used for testing purposes. Returns invalid if date is not a date, before 1910 or after today's date.
export function birthDateValidator(control: AbstractControl): {[key: string]: boolean} | null {

  if ( !(control.value instanceof Date) || control.value.getFullYear() < 1910 || control.value.getFullYear() >= new Date().getFullYear()){
    return {birthDateValidator: true};
  }
  return null;
}
