import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-password',
  templateUrl: './random-password.component.html',
  styleUrls: ['./random-password.component.css']
})

export class RandomPasswordComponent implements OnInit {
  randomPassword: string = 'Generate password';

  constructor() { }

  ngOnInit(): void {
  }

  generatePassword() {
    this.randomPassword = '';
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";
    for (let i = 0; i < 12; i++)
      this.randomPassword += possible
        .charAt(Math.floor(Math.random() * possible.length));
    return this.randomPassword;
  }

}
