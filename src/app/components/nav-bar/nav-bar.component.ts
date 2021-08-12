import {OnInit, Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']

})

export class NavBarComponent  implements OnInit {


    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

    @Input() open = false;

    constructor(){

    }

    ngOnInit(): void {

    }


    toggle(){
        this.open = !this.open;
        this.menuToggle.emit(this.open)
    }
}
