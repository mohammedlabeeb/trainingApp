import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lc-child',
  template: `
    <p>
      lc-child works!
    </p>
    <div *ngIf="showContent"><ng-content></ng-content></div>
    <div>Param1 :  {{param1}}    </div>
    <div>Param2 :  {{param2.name}} -  {{param2.age}} -  {{param2.phone}}   </div>
    <div>Heading :  {{heading}}    </div>
    <div>Details :  {{details}}    </div>
  `,
  styleUrls: ['./lc-child.component.css']
})
export class LcChildComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() param1: string;
  @Input() param2: any;
  @Input() showContent: boolean;

  heading: string;
  details: string;

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');

    this.heading = changes.param1 && `Hello !! ${changes.param1.currentValue}` || this.heading;
    // console.log(changes);
    // this.param2 = changes.param2 && changes.param2.currentValue || this.param2;
    // this.details = `Details Are = ${this.param2.name} - ${this.param2.age} - ${this.param2.phone}`;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.heading = `Hello !! ${this.param1}`;
    this.updateDetails();
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.updateDetails();
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  private updateDetails() {
    this.details = `Details Are = ${this.param2.name} - ${this.param2.age} - ${this.param2.phone}`;
  }
}
