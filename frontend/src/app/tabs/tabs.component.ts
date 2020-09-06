import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters: [
    { name: 'Luke Skywalker'; side: '' },
    { name: 'Darth Vader'; side: '' }
  ];

  choosenList = 'all';
  constructor() {}

  ngOnInit(): void {}

  choosenSide(side) {
    this.choosenList = side;
  }

  getCharacters() {
    if (this.choosenList) {
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
      return char.side === this.choosenList;
    });
  }
}
