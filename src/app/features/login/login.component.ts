import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: any;
  dataForm: any;
  registrForm: FormGroup;

  constructor(private http: HttpClient) {
    this.registrForm = new FormGroup({
      "loginUser": new FormControl("", Validators.required),
      "passwordUser": new FormControl("", Validators.required)
    })
  }

  submit() {

    // this.dataForm = this.registrForm.value;
    // let params = new HttpParams().append('loginUser', this.dataForm.loginUser).append('passwordUser', this.dataForm.passwordUser);
    this.http.get('http://www.mocky.io/v2/5acd10333200006d0077664d', {params: this.registrForm.value}).subscribe((data) => this.user = data);
  }

  ngOnInit() {

  }

}
