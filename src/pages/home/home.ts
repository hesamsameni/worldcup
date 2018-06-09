import { Component } from '@angular/core';
import { NavController, NavPush } from 'ionic-angular';
import { MatchesPage } from '../matches/matches';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToMatches(date){
    this.navCtrl.push( MatchesPage,{
      date:date
    });
  }
}
