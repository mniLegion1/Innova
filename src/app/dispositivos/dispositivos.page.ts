import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {

  constructor(private location:Location, private acRoute:ActivatedRoute, public alertController: AlertController,
    private router:Router) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
    console.log(this.location)
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Ingreso de registro del pariente',
      message: 'Se cancelará el registro del pariente. ¿Desea continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.myBackButton()
          }
        }
      ]
    });
    await alert.present();
  }

}
