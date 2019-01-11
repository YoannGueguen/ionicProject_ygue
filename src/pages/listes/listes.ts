import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {StorageProvider} from "../../providers/storage/storage";
import {EpisodePage} from "../episode/episode";
import {DetailsPage} from "../details/details";
import {SeriesPage} from "../series/series";

/**
 * Generated class for the ListesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listes',
  templateUrl: 'listes.html',
})
export class ListesPage {
    public tabStorage = [];
    constructor(public navCtrl: NavController, private storage: StorageProvider) {
    }

    ionViewWillEnter() {
      this.storage.get('favori').then((data)=>{this.tabStorage =data});
  }

  removeFavorite(history: Object){
        this.tabStorage.splice(this.tabStorage.indexOf(history),1);
        this.storage.set('favori', this.tabStorage);
  }
  openDetails(historyId, seasonId, episodeId, type){
      console.log(type);
      if(type == 'episode'){
        this.navCtrl.push(EpisodePage,{serieId: historyId, seasonId: seasonId, episodeNumber: episodeId});
      }else if(type == 'film'){
          this.navCtrl.push(DetailsPage,{movieId: historyId})
      }else{
          this.navCtrl.push(SeriesPage,{serieId: historyId})
      }
  }
  removeAll(){
      this.storage.clear();
      this.tabStorage = [];
  }
}
