import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})
export class TiempoPage implements OnInit {
  respu
  dataa

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      
      //console.log(resp)      
      this.respu = resp
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude

      console.log(data)
      //this.dataa = data
     });
     //console.log(typeof(this.respu))
     //console.log(typeof(this.dataa))
  }


  
}
