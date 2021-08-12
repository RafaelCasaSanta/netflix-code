import { Input, ViewChild, Component, OnInit, ElementRef } from '@angular/core';


@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
    @Input() title: any;

    @ViewChild('trailer', { static: false })
    trailer!: ElementRef<HTMLVideoElement>;

    constructor() {}

    ngOnInit(): void {}

    playVideo() {

        return this.trailer.nativeElement.play();
    }

    stopVideo() {
        this.trailer.nativeElement.currentTime = 0;
        return this.trailer.nativeElement.pause();

    }

    getMuted(): boolean {
        return this.trailer ? this.trailer.nativeElement.muted : false;
    }

    toggleSound(){
        return this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
    }
}
