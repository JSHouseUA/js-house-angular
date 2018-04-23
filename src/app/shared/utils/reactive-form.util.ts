import {FormArray, FormGroup} from '@angular/forms';

export class ReactiveFormUtil {


  /**
   * TODO: make all cases of splice function
   * Now it can only:
   * remove elements from startAt to fixed position or to end
   * paste array elements in selected position
   * @param {FormArray} formArray
   * @param {number} startAt
   * @param {number} count
   * @param {FormGroup} elements
   * @returns {any}
   */
  static splice(formArray: FormArray, startAt: number, count: number = 1, ...elements: FormGroup[]) {
    let tail: FormGroup[] = [];

    /**
     * To add some elements in array
     */
    if (elements.length) {
      tail = [...elements, ...ReactiveFormUtil.formArrayToArray(formArray, startAt)];
      tail.forEach(formGroup => {
        formArray.setControl(startAt++, formGroup);
      });
      return formArray
    }
    /**
     * To cut some elements
     */
    else {
      let endAt = startAt + count,
        deleted: FormGroup[] = [...ReactiveFormUtil.formArrayToArray(formArray, startAt, endAt)];
      tail = [...ReactiveFormUtil.formArrayToArray(formArray, endAt)];
      tail.forEach(formGroup => {
        formArray.setControl(startAt++, formGroup);
      });
      deleted.forEach((formGroup, index) => {
        formArray.removeAt(formArray.length - 1 - index);
      });
      return deleted;
    }
  }

  /**
   * Takes FormArray and copies each element to vanilla Array
   * @param {FormArray} formArray
   * @param {number} from
   * @param {number} to
   * @returns {FormGroup[]}
   */
  static formArrayToArray(formArray: FormArray, from: number = 0, to: number = formArray.length): FormGroup[] {
    const array = [];
    for (let i = from; i < to; i++) {
      array.push(<FormGroup>formArray.at(i));
    }
    return array;
  }
}
