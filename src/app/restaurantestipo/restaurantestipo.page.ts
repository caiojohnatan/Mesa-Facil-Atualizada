import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurantestipo',
  templateUrl: './restaurantestipo.page.html',
  styleUrls: ['./restaurantestipo.page.scss'],
})
export class RestaurantestipoPage implements OnInit {

  constructor(private navCtrl: NavController) {
    // Construtor do componente
  }

  onCardClick(cardName: string) {
    console.log(`Card clicado: ${cardName}`);
   
    if (cardName === 'Card 1') {
      this.navCtrl.navigateForward('/login');
    } else if (cardName === 'Card 2') {
      this.navCtrl.navigateForward('/login');
    } else if (cardName === 'Card 3') {
      this.navCtrl.navigateForward('/login');
    } else if (cardName === 'Card 4') {
      this.navCtrl.navigateForward('/login');
    } else if (cardName === 'Card 5') {
      this.navCtrl.navigateForward('/login');
    } else if (cardName === 'Card 6') {
      this.navCtrl.navigateForward('/login');
    } else if (cardName === 'Card 7') {
      this.navCtrl.navigateForward('/login');
    } else if (cardName === 'Card 8') {
      this.navCtrl.navigateForward('/login');
    }
  }

  ngOnInit() {
  }
  

}