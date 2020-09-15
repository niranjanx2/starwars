import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { StarWarsService } from '../star-wars.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  characters;
  activatedRoute: ActivatedRoute;
  starWarsService: StarWarsService;
  sideChoosen = 'all';
  subscription: Subscription;


  constructor(activatedRoute: ActivatedRoute, starWarsService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.starWarsService = starWarsService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param) => {
        console.log(2);
        this.characters = this.starWarsService.getCharacters(param.side);
        this.sideChoosen = param.side;
      }
    );

    this.subscription = this.starWarsService.charactersChanges.subscribe(
      () => {
        console.log(1);
        this.characters = this.starWarsService.getCharacters(this.sideChoosen);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
