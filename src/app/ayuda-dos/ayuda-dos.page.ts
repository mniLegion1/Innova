import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ayuda-dos',
  templateUrl: './ayuda-dos.page.html',
  styleUrls: ['./ayuda-dos.page.scss'],
})
export class AyudaDosPage implements OnInit {
  opc
  problema:string
  correo:string

  constructor(public toastController: ToastController, private acRoute:ActivatedRoute, private router:Router, private location:Location) { }

  ngOnInit() {
    this.problema = null
    this.correo = null
    this.opc = this.acRoute.snapshot.paramMap.get('opc');
    console.log(this.opc)
  }

  async Enviar(correo,problema){

    if(correo == null  && problema == null) {
      this.toast1()
    }

    else if(correo != null  && problema == null){
      this.toast1()
    }

    else if(correo == null && problema != null){
      this.toast2()
    }

    else{
      this.router.navigateByUrl("/Ayuda")

      
        const toast = await this.toastController.create({
          message: 'Enviado',
          duration: 2000
        });
        toast.present();
    }

    correo=null
    problema=null
  }

  async toast1() {
    const toast = await this.toastController.create({
      message: 'Escribe la descripción de tu problema',
      duration: 2000
    });
    toast.present();
  }

  async toast2() {
    const toast = await this.toastController.create({
      message: 'Ingresa tu correo electrónico',
      duration: 2000
    });
    toast.present();
  }


}
