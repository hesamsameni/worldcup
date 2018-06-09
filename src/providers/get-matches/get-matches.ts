import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {LoadingController } from 'ionic-angular/index';
@Injectable()
export class GetMatchesProvider {
  http: any;
  data: any;
  constructor(http: Http, public loadingController:LoadingController) {
    this.http = http;
  }

  getMatches(date){
    let loading = this.loadingController.create({
      content: 'در حال جستجو'
    });
    loading.present();  
    return new Promise(resolve => {
      this.http.get("https://api.sportradar.us/soccer-t3/intl/en/schedules/"+date+"/schedule.json?api_key=f972a4cymed2rpncdc2dtcgv")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          loading.dismiss();
        });
    }); 
  }

}
