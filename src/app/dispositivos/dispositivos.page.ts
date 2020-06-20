import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController} from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {

  constructor(private location:Location, private acRoute:ActivatedRoute, public alertController: AlertController,
    private router:Router, public loadingController: LoadingController ) { }

  ngOnInit() {
    this.presentLoading()
    
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      translucent: true,
      message: 'Buscando dispositivos...',
      backdropDismiss: true,
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


}
