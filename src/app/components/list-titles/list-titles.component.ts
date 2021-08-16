import { Component, Input, OnInit } from '@angular/core';

import { ITitles } from 'src/app/interfaces/movie-titles.interface';

@Component({
    selector: 'app-list-titles',
    templateUrl: './list-titles.component.html',
    styleUrls: ['./list-titles.component.scss'],
})
export class ListTitlesComponent implements OnInit {
    @Input() title!: string;
    @Input() list: ITitles[] = [];

    constructor() {}

    images = [

        {path: '/assets/images/ss.png'},
        {path: '/assets/images/ep9.jpg'},
        {path: '/assets/images/eu-sou-a-lenda.jpg'},
        {path: '/assets/images/full-banner.jpg'},



    ];




    ngOnInit(): void {}
}
