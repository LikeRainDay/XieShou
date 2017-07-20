import {Component, Input, OnInit} from '@angular/core';
import {promise} from "selenium-webdriver";
import when = promise.when;

@Component({
  selector: 'app-thirdlogin',
  templateUrl: './thirdlogin.component.html',
  styleUrls: ['./thirdlogin.component.scss']
})


export class ThirdloginComponent implements OnInit {

  thirdTypes: string[] = [
    "QQ", "WEIXIN", "FACEBOOK", "TWITT"
  ];


  constructor() {
  }

  ngOnInit() {


  }

  /*进行登录第三方平台*/
  loginThirdPlatform(type: string): void {
    // 进行区分点击的是哪一块
    switch (type) {
      case this.thirdTypes[0]:

        break;
      case this.thirdTypes[1]:


        break;
      case this.thirdTypes[2]:

        break;
      case this.thirdTypes[3]:

        break;
    }
  }

}
