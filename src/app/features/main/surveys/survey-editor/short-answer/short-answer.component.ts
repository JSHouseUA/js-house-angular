import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {PreparedRegex} from "../../../../../shared/models/ui/regex";

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent implements OnInit {

  @Input() formData: FormGroup;
  @ViewChild('regexSelect') regexSelect: NgForm;
  @ViewChild('regexForm') regexForm: NgForm;

  answerForm: FormGroup;
  regexes: PreparedRegex.Model[] = [
    {name: 'none'},
    PreparedRegex.email,
    PreparedRegex.phone,
    {name: 'custom'}
  ];
  regex: PreparedRegex.Model = this.regexes[0];
  flags: PreparedRegex.Flag[] = PreparedRegex.flags;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.answerForm = this.fb.group({
      'title': ['', Validators.required],
      'description': [''],
      'validators': [''],
      'placeholder': [''],
      'maxLength': [100, Validators.required],
      'required': [false]
    });
    this.formData.addControl('formData', this.answerForm);
    this.formData.addControl('regex', this.regexForm.control);
  }

  onRegexTypeChange(regex: PreparedRegex.Model): void {
    console.log(regex)
  }
  submit(e: NgForm){
    console.dir(e.control)
    console.dir(e.value)
    console.dir(e.valid)
  }

  get isCustomRegex(): boolean{
    return this.regexes.indexOf(this.regex) > 2
  }



}
