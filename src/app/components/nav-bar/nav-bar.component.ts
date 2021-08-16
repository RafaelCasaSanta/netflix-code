import {OnInit, Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']

})

export class NavBarComponent  implements OnInit {


    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

    @Input() open = false;

    public ishowingMessage: boolean;

    constructor(){

        this.ishowingMessage = false;
    }

    public hideMessage(): void{
        this.ishowingMessage = false;
    }


    public ngDoCheck() : void {

		console.log( "ngDoCheck() - Change detection triggered." );

	}


	// I show the peer-pressure message.
	public showMessage() {

		this.ishowingMessage = true;

    }







    ngOnInit(): void {

    }


    toggle(){
        this.open = !this.open;
        this.menuToggle.emit(this.open)
    }





}



