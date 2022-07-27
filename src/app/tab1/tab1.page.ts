import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numbInput;
  newNum;
  constructor() {}

  btnNew(){
    this.newNum = this.numbInput;
  }

  btnAdd(){
    this.newNum = this.numbInput + this.newNum;
  }

  btnMin(){
    this.newNum = this.newNum - this.numbInput;
  }

}
