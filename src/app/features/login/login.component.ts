import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide = true;

    registrForm : FormGroup;
  constructor() {
    this.registrForm = new FormGroup({
        "loginUser": new FormControl("",Validators.required),
        "passwordUser": new FormControl("",Validators.required)
    })
  }
    submit(){

    }
  ngOnInit() {
  }

}
