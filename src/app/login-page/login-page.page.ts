import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  alertCtrl: any;

  constructor() {}

  ngOnInit() {}

  showAlert() {
    alert('Hello world');
  }

  login() {
    console.log('Login');
  }
}
