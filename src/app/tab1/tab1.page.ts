import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numbInput;
  newNum;
  percentage;
  prog;
  originalNum;
  constructor() {}

  btnNew(){
     this.newNum = this.numbInput;
     this.originalNum = this.newNum = this.numbInput;
     this.prog = 1;
     this.percentage = 100;
  }

  btnAdd(){
    if((this.newNum = this.numbInput + this.newNum) >= this.originalNum){
      this.prog = 1;
      this.percentage = 100;
    } else {
      const addDec = this.numbInput / this.newNum;
      const addRoundDec = Math.floor(addDec * 10) / 10;
      this.percentage = this.percentage + addRoundDec * 100;
      this.prog = this.prog + addRoundDec;
      console.log('AddDec', addDec);
      console.log('AddDecRound', addRoundDec);
      console.log('AddPer', this.percentage);
    }

  }

  btnMin(){
    //substacts from dollar amount
     //calculate the decamal value then round it for use.
    const dec = this.numbInput / this.newNum;
    const roundDec = parseFloat(dec.toFixed(2));

    this.prog = this.prog - roundDec;
    this.percentage = Math.round(this.prog * 100);
    this.newNum = this.newNum - this.numbInput;
    console.log('SUbDec', roundDec);
    console.log('SUBPer', this.percentage);
    console.log('SUBProg', this.prog);
  }


}
