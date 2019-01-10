import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {StorageProvider} from "../../providers/storage/storage";
import {EpisodePage} from "../episode/episode";

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
  openDetails(history: Object){
      if(history.type == 'episode'){
        this.navCtrl.push(EpisodePage,{serieId: history.id, seasonId: history.seasonId, episodeNumber: history.episodeId});
          console.log(history);
      }
  }
  removeAll(){
      this.storage.clear();
      this.tabStorage = [];
  }
}
