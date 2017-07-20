import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @Output() startRegister2Login: EventEmitter<any> = new EventEmitter();

  inputTypes: string[] = ["Full Name", "Email", "Password", "Confirm Password"];

  constructor() {
  }

  ngOnInit() {
  }

  /*发射器 进行发射此点击事件*/
  skipLogin(): void {
    this.startRegister2Login.emit(null);
  }

  registerCheck(account: string, email: string, password: string, checkPassword: string): void {


  }

  /*检测默认确认密码和输入密码是否正确*/
  checkPasswordIsRight(password: string, checkPassword: string) {


  }

  checkPasswordForm(password: string) {


  }

}
