import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.services';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' },
  ];

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {}

  onSubmit(formData) {
    console.log('submitted!!!', formData.value,formData);
    if (formData.invalid) {
      return false;
    }
    this.swService.addCharacters(formData.value.name, formData.value.side);
  }
}
