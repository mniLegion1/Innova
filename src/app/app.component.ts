import { Component, OnInit } from '@angular/core';
import { MenuController, IonicModule } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  suscribe:any
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Control remoto',
      url: '/control-remoto',
      icon: 'wifi'
    },
    {
      title: 'Búsqueda CG',
      url: '/BusquedaCG',
      icon: 'analytics'
    },
    {
      title: 'Pronóstico del tiempo',
      url: '/Tiempo',
      icon: 'cloudy'
    },
    {
      title: 'Nuestros socios',
      url: '/TiendaOnline',
      icon: 'trail-sign'
    },
    {
      title: 'Ayuda',
      url: '/Ayuda',
      icon: 'help'
    }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();

    this.suscribe = this.platform.backButton.subscribeWithPriority(666666,() => {
      if(this.constructor.name == "AppComponent"){
        if(window.confirm("Presione de nuevo para salir de la aplicación")){
          navigator["app"].exitApp();
        }
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
