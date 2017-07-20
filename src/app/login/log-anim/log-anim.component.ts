import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-log-anim',
    templateUrl: './log-anim.component.html',
    styleUrls: ['./log-anim.component.scss'],
    animations: [
      /*进行定义动画的相关操作*/
      trigger('skipRegister', [
        state('in', style({
          // perspective: '1000px',
          // backgroundColor: '#51ee3c',
          transform: 'rotateY(0)',
          display: 'block'
        })),
        state('out', style({
          // perspective: '1000px',
          // backgroundColor: '#3b36dc',
          transform: 'rotateY(180)',
          display: 'block'
        })),
        transition('in => out', [
          animate('5000ms ease-in')
        ]), transition('out => in', [
          animate('200ms ease-out')
        ])
      ]),
      trigger('skipLogin', [
        state('in', style({
          // perspective: '1000px',
          transform: 'rotateY(0deg)',
          // display: 'none'
        })),
        state('out', style({
          // perspective: '1000px',
          transform: 'rotateY(180deg)',
          // display: 'block'
        })),
        transition('in => out', [
          animate('2000ms ease-in')
        ])
      ])
    ]
  }
)
export class LogAnimComponent implements OnInit {

  skipLogin: string="in";
  skipRegister: string="in";


  constructor() {
  }

  ngOnInit() {
  }

  /*开启登录界面到注册界面*/
  startLoginAnimation(): void {
    this.skipLogin = "out"
  }

  /*开启注册界面到登录界面*/
  startRegisterAnimation(): void {

    this.skipRegister = "out"
  }
}
