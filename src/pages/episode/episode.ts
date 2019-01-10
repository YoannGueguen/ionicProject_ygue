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
    public tab = {};
    public history = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public detailsProvider: DetailsProvider, private storageProvider: StorageProvider) {
  }
    goBack() {
        this.navCtrl.pop();
    }
  ionViewDidLoad() {
      this.serieId = this.navParams.get('serieId');
      this.seasonNumber = this.navParams.get('seasonId');
      this.episodeNumber = this.navParams.get('episodeNumber');
      this.detailsProvider.getEpisode(this.serieId, this.seasonNumber, this.episodeNumber.Episode)
          .then(data =>{
              this.episode = data;
              console.log(this.episode);
          })
      ;

  }
    addFavorite() {

        this.tab = {
            'date' : new Date(),
            'title' : this.episode.Title,
            'type' : "episode",
            'id' : this.serieId,
            'poster': this.episode.Poster,
            'seasonId': this.seasonNumber,
            'episodeId': this.episodeNumber.Episode
        };

        this.history.push(this.tab);
        this.storageProvider.set('favorie',this.history);
    }
}
