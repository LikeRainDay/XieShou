/**
 * Created by housh on 2017/7/17.
 */
import {Component, EventEmitter, Output} from '@angular/core';
import {UesrService} from "../user-service/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginHttpComponent {

  @Output() startLogin2Register: EventEmitter<any> = new EventEmitter();
  name: string;

  constructor(private UesrService: UesrService) {


  }

  /*提交用户信息*/
  sumbit(account: string, password: string): void {
    this.UesrService.getUser().subscribe(
      content => this.name = content
    );
    alert('输入账号为空 $name' + name)

    // if (null == account || account == "") {
    //   alert('输入账号为空')
    // }
    // if (null == password || "" == password) {
    //   alert('输入的密码为空')
    // }
    // 进行输入内容校验


  }

  /*进行跳转前发射触发事件*/
  onSkipRegister(): void {
    this.startLogin2Register.emit(null);
  }


}

