import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  private logService: LogService;
  charactersChanges = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(choosenList) {
    if (choosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
      return char.side === choosenList;
    });
  }

  assignNewSide(newSide) {
    console.log('newSide3', newSide);
    const pos = this.characters.findIndex((char) => {
      return char.name === newSide.name;
    });

    this.characters[pos].side = newSide.side;
    this.charactersChanges.next();

    this.logService.addLogs(
      'changing side of: ' + newSide.name + ' , to new side: ' + newSide.side
    );
  }

  addCharacters(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });

    if (pos !== -1) {
      return false;
    }
    const charToAdd = { name, side };
    this.characters.push(charToAdd);
  }
}
