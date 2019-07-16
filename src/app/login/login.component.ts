import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id: string = ""
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(mobileNumber) {
    this.id = mobileNumber
    this.router.navigate([this.id, 'qrcode'])
  }

}
