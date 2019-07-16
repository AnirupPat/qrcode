import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
  techiediaries = 'https://www.npmjs.com/~techiediaries';
  letsboot = 'https://www.letsboot.com/';
  value1 : string = 'Techiediaries';
  value2 : string = '99';
  numberForQR: string;

  constructor() { }

  ngOnInit() {
    
  }

  generateQR () {
    console.log(this.numberForQR);
    this.value2 = this.numberForQR;
  }

  

}
