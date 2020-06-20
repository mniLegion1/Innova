import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-remoto',
  templateUrl: './control-remoto.page.html',
  styleUrls: ['./control-remoto.page.scss'],
})
export class ControlRemotoPage implements OnInit {

  constructor(public alertController: AlertController, private route:Router) { }

  ngOnInit() {
    this.presentAlertConfirm()
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.route.navigateByUrl("/BusquedaCG"); 
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
