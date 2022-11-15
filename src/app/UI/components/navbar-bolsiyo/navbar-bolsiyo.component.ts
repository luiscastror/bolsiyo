import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-bolsiyo',
  templateUrl: './navbar-bolsiyo.component.html',
  styleUrls: ['./navbar-bolsiyo.component.scss']
})
export class NavbarBolsiyoComponent implements OnInit {

  logo: string = 'https://static.wixstatic.com/media/d7a1b7_776719805ba8441f9df268ebb889f003~mv2.png/v1/fill/w_140,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20210104_Marca%20Bolsiyo%20Final%20GSuite-14.png';

  constructor() { }

  ngOnInit(): void {
  }


  menu: any[] = [
    {
      label: "Menu",
      url: "menu",
      icon: "bolsiyo"
    },
    {
      label: "Menu",
      url: "menu",
      icon: "bolsiyo"
    },
    {
      label: "Menu",
      url: "menu",
      icon: "bolsiyo"
    },
    {
      label: "Menu",
      url: "menu",
      icon: "bolsiyo"
    }
  ]

}
