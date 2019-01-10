import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {StorageProvider} from "../../providers/storage/storage";

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
    constructor(private storage: StorageProvider) {
    }

    ionViewDidLoad() {
      this.storage.get('historique').then((data)=>{this.tabStorage =data});
  }

  removeFavorite(itemId: number){
        this.tabStorage.splice(itemId,1);
        this.storage.set('historique', this.tabStorage);
  }
}
