import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoginService} from './login.service';

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

  constructor(private loginService: LoginService) {
    this.registrForm = new FormGroup({
      "username": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    })
  }

  ngOnInit() {

  }

  login(){
    this.loginService.login(this.registrForm.value).subscribe(
      data => {
        console.log(data)
      }
    )
  }


}
