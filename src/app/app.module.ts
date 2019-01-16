import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import {TabcontentPage} from "../pages/tabcontent/tabcontent";
import {ListesPage} from "../pages/listes/listes";
import {MoviesPage} from "../pages/movies/movies";
import {SeriesPage} from "../pages/series/series";
import {DetailsPage} from "../pages/details/details";
import {DetailsSaisonPage} from "../pages/details-saison/details-saison";
import {SerieDetailsPage} from "../pages/serie-details/serie-details";
import {EpisodePage} from "../pages/episode/episode";

import { MoviesProvider } from '../providers/movies/movies';
import { SeriesProvider } from '../providers/series/series';
import { DetailsProvider } from '../providers/details/details';
import { StorageProvider } from '../providers/storage/storage';

import {SocialSharing} from "@ionic-native/social-sharing";
import { ImportListProvider } from '../providers/import-list/import-list';
import { ExportListProvider } from '../providers/export-list/export-list';
import {FileChooser} from "@ionic-native/file-chooser";
import {FilePath} from "@ionic-native/file-path";


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
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    DetailsProvider,
    StorageProvider,
    SocialSharing,
    ImportListProvider,
    ExportListProvider,
      FileChooser,
      FilePath
  ]
})
export class AppModule {}
