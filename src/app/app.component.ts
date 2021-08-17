import { Component } from '@angular/core';
import { ITitles } from './interfaces/movie-titles.interface';
import { IvyCarouselModule } from 'angular-responsive-carousel';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    menuOpened = false;


    listTitles = [{
        trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
        cover: 'assets/images/guardios-da-galaxia.jpg',
        name: 'Guardiões da Galaxia',
        relevance: 90,
        age: 0,
        parts:1,
        categories: ['epico', 'fantasia']
    }, {
        trailer: 'assets/videos/cap_trailer.mp4',
        cover: 'assets/images/capitao-america-o-primeiro-vingador.jpg',
        name: 'Capitão America Primeiro Vingador',
        relevance: 90,
        age: 12,
        parts:1,
        categories: ['epico', 'fantasia']
    }, {
        trailer: 'assets/videos/what_if.mp4',
        cover: 'assets/images/WHAT-IF-E-SE.jpg',
        name: 'WHAT IF ?',
        relevance: 75,
        age: 14,
        parts:1,
        categories: ['epico', 'fantasia']
    },  {
        trailer: 'assets/videos/mandalorian.mp4',
        cover: 'assets/images/sw.jpg',
        name: 'O Mandaloriano',
        relevance: 500,
        age: 18,
        parts:2,
        categories: ['Epic', 'Sci-fi', 'Western']
    },{
    trailer: 'assets/videos/ss.mp4',
    cover: 'assets/images/ss.jpg',
    name: 'O Esquadrão Suicida',
    relevance: 500,
    age: 18,
    parts:2,
    categories: ['Epic', 'Sci-fi', 'Western']
    }, {
    trailer: 'assets/videos/TWD.mp4',
    cover: 'assets/images/twd.jpg',
    name: 'The Walking Dead',
    relevance: 500,
    age: 18,
    parts:11,
    categories: ['Epic', 'Sci-fi', 'Western']
    }, ]


    setMenuState(state: boolean){
        this.menuOpened = state;
    }

    closeMenu(){
        this.menuOpened = false;
    }



    imagesForSlider = [
        {path: '/assets/images/avatar.jpg'},
        {path: '/assets/images/full-banner.jpg'},
        {path: '/assets/images/eu-sou-a-lenda.jpg'},
        {path: '/assets/images/ep9.jpg'},
        {path: '/assets/images/card.jpg'}
    ];

    ngOnInit(){

    }

	handleCarouselEvents(event:any) {
		console.log(event);
	}


}
