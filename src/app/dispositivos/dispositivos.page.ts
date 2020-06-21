import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController} from '@ionic/angular';
import { Location } from "@angular/common";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {
  estado:any;
  dispositivos:any
  constructor(private location:Location, private acRoute:ActivatedRoute, public alertController: AlertController,
    private router:Router, public loadingController: LoadingController,private storage: Storage ) { }

  ngOnInit() {
    this.storage.get('primeraBusqueda').then((val) => {
      console.log('Estado', val);
      this.estado=val
      if (val == 0) {
        this.presentLoading()
      }else if (this.estado==1){
        this.dispositivos=[
          "(CG) webOS CL IN9203 192.168.0.8 CONECTADO",
         
        ]
      }
    });
    
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
    this.storage.set('primeraBusqueda', 1);
    // this.estado=1
    this.dispositivos=[
      "(CG) webOS CL IN9203 192.168.0.8"
    ]
  }

  async conectar(value) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      translucent: true,
      message: 'Conectando' + value ,
      backdropDismiss: true,
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.storage.set('primeraBusqueda', 1);
    this.estado=1
    this.dispositivos=[
      "(CG) webOS CL IN9203 192.168.0.8 CONECTADO",
     
    ]
  }
  async Desconect() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      translucent: true,
      message: 'Desconectando ...'  ,
      backdropDismiss: true,
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.storage.set('primeraBusqueda', 0);
    this.estado=0
    this.dispositivos=[
      "(CG) webOS CL IN9203 192.168.0.8"
    ]
  }
  desconectar(){
    this.storage.set('primeraBusqueda', 0);
    this.estado=0
   this.Desconect()
    
  }
  cellColor() {
  
        if (this.estado ==1) {
          return 'danger'
         
        } else if (this.estado ==0) {
          return 'orange';
        }
      
  }

}
