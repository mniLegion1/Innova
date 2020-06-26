import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-control-remoto',
  templateUrl: './control-remoto.page.html',
  styleUrls: ['./control-remoto.page.scss'],
})
export class ControlRemotoPage implements OnInit {
  estado: any
  filtro: any
  impermeable: boolean;

  constructor(public alertController: AlertController, private route: Router, private storage: Storage, public loadingController: LoadingController) {

  }

  async ngOnInit() {
    this.impermeable = false
    console.log("on init");

    this.storage.get('primeraBusqueda').then((val) => {
      console.log('Estado', val);
      this.estado = val
      if (val == 0) {
        this.presentAlertConfirm()
      }
    });

    await this.storage.get('filtro').then((val) => {
      this.filtro = val
    });

    await this.storage.get('impermeable').then((val) => {
        this.impermeable = val;
    });

    console.log(this.impermeable);
    

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

  toggle1() {

    this.impermeable = !this.impermeable
    this.storage.set('impermeable', this.impermeable);

    if (this.impermeable == true)
      this.AbrirLoading("Cortina impermeable")
    else
      this.CerrarLoading("Cortina impermeable")
  }

  toggle2() {

    this.filtro = !this.filtro
    this.storage.set('filtro', this.filtro);
    if (this.filtro == true)
      this.AbrirLoading("Cortina filtro UV")
    else
      this.CerrarLoading("Cortina filtro UV")
  }
  async AbrirLoading(puerta) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      translucent: true,
      message: 'Abriendo... ' + puerta,
      backdropDismiss: true,
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.storage.set('primeraBusqueda', 1);
    this.estado = 1
  }

  async CerrarLoading(puerta) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      translucent: true,
      message: 'Cerrando... ' + puerta,
      backdropDismiss: true,
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.storage.set('primeraBusqueda', 1);
    this.estado = 1
  }

}