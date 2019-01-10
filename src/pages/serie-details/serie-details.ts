import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsProvider} from "../../providers/details/details";
import {DetailsSaisonPage} from "../details-saison/details-saison";

/**
 * Generated class for the SerieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serie-details',
  templateUrl: 'serie-details.html',
})
export class SerieDetailsPage {
    serie;
    seasonNumber = [];
    constructor(public navCtrl: NavController, public navParams: NavParams,public detailsProvider: DetailsProvider) {
    }

    goBack() {
        this.navCtrl.pop();
    }
    ionViewDidLoad() {
        const serieId = this.navParams.get('serieId');
        this.detailsProvider.getSeasonDetails(serieId)
            .then(data =>{
                this.serie = data;
                if(this.serie != null){
                    this.serie.Poster = 'http://img.omdbapi.com/?apikey=75522b56&i=' + this.serie.imdbID;
                }
                for (let i=0;i <this.serie.totalSeasons;i++ ){
                    this.seasonNumber.push(i+1);
                    console.log(this.seasonNumber);
                }
            });
    }
    openDetails(serieId:string, seasonId: number) {
        this.navCtrl.push(DetailsSaisonPage,{serieId: serieId, seasonId: seasonId});
    }
}
