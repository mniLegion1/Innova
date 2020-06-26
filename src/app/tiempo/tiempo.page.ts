import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
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
  tiempo: any;
  place: string="";
  type: string="";
  icon: string="";
  tempo: string="";
  log: any;
  constructor(
    private router:Router,
    private geolocation: Geolocation,
    private api:ApiService,
    public HttpClient: HttpClient,
    public Platform: Platform) 
    { 
      this.Platform.ready().then(()=>{
        this.GetCurrentLocation();
      })
    }

  ngOnInit() {
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   resp.coords.latitude
    //   resp.coords.longitude
    //   console.log(resp)
    //   this.api.Tiempo(resp.coords.latitude, resp.coords.longitude).subscribe(tiempos =>{
    //     this.tiempo[0] = tiempos
    //     console.log(this.tiempo[0])
    //   },error=>{
    //     console.log("Error getting data")
    //   });
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });

    //  let watch = this.geolocation.watchPosition();
    //  watch.subscribe((data) => {
    //   data can be a set of coordinates, or an error (if an error occurred).
    //   data.coords.latitude
    //   data.coords.longitude

    //   console.log(data)
    //  });
    
  }

Reload(){
  this.router.navigateByUrl('/Tiempo');
}
  
GetCurrentLocation(){
  this.geolocation.getCurrentPosition().then((pos)=>{
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    this.GetCurrentTemperature(lat,lon);
  })
}
GetCurrentTemperature(lat,lon){
  var url = "http://api.weatherapi.com/v1/current.json?key=986cfdf8980c430abd852331202506&q="+lat+","+lon;
  this.HttpClient.get(url).subscribe((tempdata)=>{
    var obj = <any>tempdata;
    console.log(obj);
    this.place = obj.location.name;
    this.type = obj.current.condition.text;
    this.icon = obj.current.condition.icon;
    this.tempo = obj.current.temp_c + "°C";
    this.log = obj;
  },error =>{
    console.log(error);
    this.log = error.error.error.message;
  });
  
}
}
