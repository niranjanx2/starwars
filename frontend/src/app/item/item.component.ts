import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.services';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  assingSide(side){
    console.log('side',side);
    this.swService.assignNewSide({name: this.character.name,side});
  }
}
