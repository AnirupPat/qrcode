import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  windowRef: any
  phoneNumber: string = '+919980179944'
  verificationCode: any
  invalidOTP: boolean
  phForm: boolean
  id: string = ""
  constructor(
    private win: WindowService,
    private router: Router,
    private httpClient:HttpClient
  ) {
    privatewin:WindowService
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
   }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    //firebase.auth().settings.appVerificationDisabledForTesting = true;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    })

    this.windowRef.recaptchaVerifier.render();
    this.httpClient.get("https://sheets.googleapis.com/v4/spreadsheets/1dckCdC77nmYaoS4hJaSh5FGc4TIkCwVZIZEbT7Zgx6M/values/A2%3AB10?majorDimension=ROWS&key=AIzaSyBlMdlIbjzFzafcF-7gnVQVFIwgpCvolSw")
      .subscribe((data) =>  {
        console.log(data)
    });
  }

  login(mobileNumber) {
    this.id = mobileNumber
    this.router.navigate([this.id, 'qrcode'])
  }


  sendLoginCode() {
 
    const appVerifier = this.windowRef.recaptchaVerifier;
    
    const num = this.phoneNumber;
    
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
    .then(result => {
    this.windowRef.confirmationResult = result;
    })
    .catch( error =>{
    alert('Something went wrong!');
    console.log(error);
    });
    
  }


  verifyLoginCode() {
    this.windowRef.confirmationResult
    .confirm(this.verificationCode)
    .then( result => {
      console.log(result.user)
    })
    .catch( error => {
    this.invalidOTP = false;
    console.log(error, "Incorrect code entered?");
    });
    }


  
}


