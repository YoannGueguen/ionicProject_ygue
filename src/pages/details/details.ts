import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {DetailsProvider} from "../../providers/details/details";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
    movieId;
    movie;
  constructor(public navCtrl: NavController, public navParams: NavParams, public detailsProvider: DetailsProvider) {

  }
    goBack() {
        this.navCtrl.pop();
    }
  ionViewDidLoad() {
      this.movieId = this.navParams.get('movieId');
      this.detailsProvider.getMovieDetails(this.movieId)
          .then(data =>{
              this.movie = data;
              if(this.movie != null){
                  this.movie.Poster = 'http://img.omdbapi.com/?apikey=75522b56&i=' + this.movie.imdbID;
              }
              console.log(this.movie);
          })
      ;
  }

}
