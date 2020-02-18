import { Component } from '@angular/core';
import { HandService } from './hand.service';

@Component({
    selector: 'hand',
    templateUrl: './hand.component.html',
    styleUrls: ['./hand.component.sass']
})

export class HandComponent {
    console = console;
    PRETTY_REDS = ['h', 'd']
    constructor(private handService: HandService) {}

    async ngOnInit() {
        var response:any = await this.handService.createHand();
        this.hand = response;
        //this.players = this.hand.players;
        //console.log(typeof(this.hand));
    }
    hand:any = {}
    suiteLookup = {
        's': "\u2660", 
        'h': "\u2764",
        'd': "\u2666",
        'c': "\u2663"
    }

}