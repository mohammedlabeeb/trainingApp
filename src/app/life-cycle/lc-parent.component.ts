import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-parent',
  template: `
    <p *ngIf="childVisible">
      <app-lc-child [param1]="param1" [param2]="param2" [showContent]="showContent">
      I am inside Child
      </app-lc-child>
      </p>
      <div><button (click)="changeParam1()">Change Input One</button>
      <button (click)="changeParam2()">Change Input Two</button>
      <button (click)="toggleChild()">Toggle Child Component</button>
      <button (click)="toggleContent()">Toggle Content inside</button>
      <button (click)="clickMe()">Alert It</button>
      </div>
  `,
  styleUrls: ['./lc-parent.component.css']
})
export class LcParentComponent {

  param1: string = 'this is first parameter';
  param2: any = {
    name: 'john',
    age: 25,
    phone: 123456789
  };
  childVisible: boolean = true;
  clicked = true;
  showContent: boolean = false;

  constructor() { }

  changeParam1() {
    this.param1 = 'I am Changed';
  }

  changeParam2() {
    this.param2.phone = '9857585555';
  }

  toggleChild() {
    this.childVisible = !this.childVisible;
  }

  clickMe() {
    this.clicked = true;
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

}
