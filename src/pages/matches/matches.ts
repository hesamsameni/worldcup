import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetMatchesProvider } from '../../providers/get-matches/get-matches'

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {
  public date: any;
  public matches: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public getMatchesProvider: GetMatchesProvider) {
    this.date = navParams.get("date")
  }

  ionViewDidLoad() {
    this.getMatches(this.date);
  }

  getMatches(date){
    this.getMatchesProvider.getMatches(date)
    .then(data => {
      this.matches = data;
      console.log(this.matches);
  });
}
}
