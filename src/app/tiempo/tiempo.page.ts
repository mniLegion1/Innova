import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ApiService } from '../api/api.service.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})
export class TiempoPage implements OnInit {
  tiempo = new Array()

  constructor(private router:Router, private geolocation: Geolocation, private api:ApiService) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp)
      this.api.Tiempo(resp.coords.latitude, resp.coords.longitude).subscribe(tiempos =>{
        this.tiempo[0] = tiempos
        console.log(this.tiempo[0])
      },error=>{
        console.log("Error getting data")
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude

      //console.log(data)
     });
    
  }

Reload(){
  this.router.navigateByUrl('/Tiempo');
}
  
}
