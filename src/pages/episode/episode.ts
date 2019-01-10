import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsProvider} from "../../providers/details/details";
import {StorageProvider} from "../../providers/storage/storage";

/**
 * Generated class for the EpisodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
export class EpisodePage {
    episodeNumber;
    seasonNumber;
    serieId;
    episode;
    tab = {};
    history = [];
    favori:boolean =false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public detailsProvider: DetailsProvider, private storageProvider: StorageProvider) {
  }
    goBack() {
        this.navCtrl.pop();
    }
  ionViewWillEnter() {
      this.serieId = this.navParams.get('serieId');
      console.log(this.navParams.get('serieId'));
      this.seasonNumber = this.navParams.get('seasonId');
      console.log(this.navParams.get('seasonId'));
      this.episodeNumber = this.navParams.get('episodeNumber');
      console.log(this.navParams.get('episodeNumber'));
      this.detailsProvider.getEpisode(this.serieId, this.seasonNumber, this.episodeNumber)
          .then(data =>{
              this.episode = data;
              this.storageProvider.get('favori').then((data) => {
                  if(data != null)
                  this.history = data;
                      for(let item of this.history){
                          console.log(item.title);
                          if(item.title == this.episode.Title){
                              this.favori = true;
                          }
                      }
                      console.log(this.episode.Title);
              });
          });


  }
    addFavorite() {
        this.storageProvider.get('favori').then((data) => {
            if(data != null){
                this.history = data;
            }
            this.tab = {
                'date' : new Date(),
                'title' : this.episode.Title,
                'type' : "episode",
                'id' : this.serieId,
                'seasonId': this.seasonNumber,
                'episodeId': this.episodeNumber
            };
            this.history.push(this.tab);
            console.log(this.tab);
            this.storageProvider.set('favori',this.history);
            this.favori = true;
        });
    }
    removeFavorite(){
        this.tabStorage.splice(this.tabStorage.indexOf(history),1);
        this.storage.set('favori', this.tabStorage);
    }
}
