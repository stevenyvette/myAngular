import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-hero-voter',
	templateUrl: './hero-voter.component.html',
	styleUrls: ['./hero-voter.component.css']
})
export class HeroVoterComponent implements OnInit {
	@Input() name: string;
	@Output() voted = new EventEmitter<boolean>();
	didVoted = false;

	vote(agreed: boolean) {
		this.voted.emit(agreed);
		this.didVoted = true;
	}
	constructor() { }

	ngOnInit() {
	}

}
