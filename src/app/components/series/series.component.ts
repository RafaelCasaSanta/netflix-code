import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

    menuOpened = false;

    setMenuState(state: boolean){
        this.menuOpened = state;
    }

    closeMenu(){
        this.menuOpened = false;
    }
  constructor() { }

  ngOnInit(): void {



  }



  images = [

    {path: '/assets/images/card.jpg'},
    {path: '/assets/images/ep9.jpg'},
    {path: '/assets/images/ss.jpg'},
    {path: '/assets/images/sp3jpg.jpg'},


  ]
}
