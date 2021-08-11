import { Component } from '@angular/core';
import { ITitles } from './interfaces/movie-titles.interface';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    listTitles = [{
        trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
        cover: 'assets/images/guardios-da-galaxia.jpg',
        name: 'Guardiões da Galaxia',
        relevance: 90,
        age: 0,
        parts:1,
        categories: ['epico', 'fantasia']
    }, {
        trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
        cover: 'assets/images/capitao-america-o-primeiro-vingador.jpg',
        name: 'Capitão America Primeiro Vingador',
        relevance: 90,
        age: 12,
        parts:1,
        categories: ['epico', 'fantasia']
    }, {
        trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
        cover: 'assets/images/WHAT-IF-E-SE.jpg',
        name: 'WHAT IF ?',
        relevance: 75,
        age: 14,
        parts:1,
        categories: ['epico', 'fantasia']
    },  {
        trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
        cover: 'assets/images/sw.jpg',
        name: 'O Mandaloriano',
        relevance: 500,
        age: 18,
        parts:2,
        categories: ['Epic', 'Sci-fi', 'Western']
    },
];

}
