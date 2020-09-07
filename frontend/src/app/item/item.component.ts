import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() changeSide = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  assingLightSide(side){
    alert(1);
    console.log('characterInfo1:', side);
    this.changeSide.emit({name: this.character.name, side: side});
  }

}
