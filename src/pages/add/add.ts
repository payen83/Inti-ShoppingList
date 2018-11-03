import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.product = {
      name: null,
      price: null,
      category: null,
      imageURL: null
    }
  }

  close(){
    this.viewCtrl.dismiss(null);
  }

  save(){
    this.viewCtrl.dismiss(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
