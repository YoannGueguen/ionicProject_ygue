import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import {TabcontentPage} from "../pages/tabcontent/tabcontent";
import {ListesPage} from "../pages/listes/listes";
import {MoviesPage} from "../pages/movies/movies";
import {SeriesPage} from "../pages/series/series";
import {DetailsPage} from "../pages/details/details";

import { MoviesProvider } from '../providers/movies/movies';
import { SeriesProvider } from '../providers/series/series';
import { DetailsProvider } from '../providers/details/details';
import {DetailsSaisonPage} from "../pages/details-saison/details-saison";
import {SerieDetailsPage} from "../pages/serie-details/serie-details";
import {EpisodePage} from "../pages/episode/episode";


@NgModule({
  declarations: [
    MyApp,
      TabcontentPage,
      ListesPage,
      MoviesPage,
      SeriesPage,
      DetailsPage,
      DetailsSaisonPage,
      SerieDetailsPage,
      EpisodePage
  ],
  imports: [
      HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      TabcontentPage,
      ListesPage,
      MoviesPage,
      SeriesPage,
      DetailsPage,
      DetailsSaisonPage,
      SerieDetailsPage,
      EpisodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider,
    SeriesProvider,
    DetailsProvider
  ]
})
export class AppModule {}
