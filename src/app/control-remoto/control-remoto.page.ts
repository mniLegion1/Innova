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
      header: 'CG Remote Control',
      message: 'Para usar la aplicación, tu smartphone debe estar conectado a un dispositivo CG.',
      buttons: [
        {
          text: 'Configuracion de la App',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.route.navigateByUrl("/Ayuda");
            console.log('Confirm Cancel: blah');

          }
        }, {
          text: 'Buscar otro dispositivo CG',
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
