import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  productList: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.productList = [
      {name: "Nike Shoes", price: "20", category: "shoes", imageURL: "https://ae01.alicdn.com/kf/HTB1llzoXZnI8KJjSsziq6z8QpXaY/New-Arrival-Authentic-Nike-Air-More-Uptempo-Men-s-Breathable-Basketball-Shoes-Sports-Sneakers.jpg_640x640.jpg"},
      {name: "Puma Cap", price: "49", category: "hat", imageURL: "https://images-na.ssl-images-amazon.com/images/I/91NKfi4%2BkVL._SX355_.jpg"},
      {name: "Adidas Hoodies", price: "100", category: "clothing", imageURL: "https://images-na.ssl-images-amazon.com/images/I/715L9BwE9tL._SY355_.jpg"}
    ];
  }

  pageDetails(product: any){
    this.navCtrl.push('DetailsPage', { data: product });
  }

  pageAdd(){
    let modal = this.modalCtrl.create('AddPage');

    modal.onDidDismiss(data => {
      if(data){
        this.productList.push(data);
      }
    });
    
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
