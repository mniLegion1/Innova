import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {
  opc:number

  constructor(private location:Location, private acRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  async Ayudados(opc:number){
    this.router.navigate(['Ayuda-dos',opc])
  }

}
