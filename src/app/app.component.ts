import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public modalController: ModalController) {}

OpenModal(){
  this.modalController.create({component:HomePage}).then((modalElement)=>{
    modalElement.present();
  })
}


}
