import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiendaonline',
  templateUrl: './tiendaonline.page.html',
  styleUrls: ['./tiendaonline.page.scss'],
})
export class TiendaonlinePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Lupe(){
    window.open("http://lupegajardo.com/", "_self");
  }

  Matias(){
    window.open("https://www.matiashernan.com/", "_self");
  }

  MO(){
    window.open("https://mo-store.cl/", "_self");
  }
}
