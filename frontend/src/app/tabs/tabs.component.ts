import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.services';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters: {name: string; side?: string}[];
  swService: StarWarsService;

  choosenList = 'all';
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {}

  choosenSide(side) {
    this.choosenList = side;
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.choosenList);
    console.log('this.characters',this.characters);
    return this.characters;
  }
}
