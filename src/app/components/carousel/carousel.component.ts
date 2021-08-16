import { Component, Input, OnInit } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
    constructor() {}
    @Input() images:  [] = [];

    ngOnInit(): void {}





    imagesTest = [
        {
            path: '/assets/images/avatar.png',
        },
        {
            path: '/assets/images/ds.jeg.jpeg',
        },
        {
            path: '/assets/images/full-banner.jpg',
        },
    ];

}

