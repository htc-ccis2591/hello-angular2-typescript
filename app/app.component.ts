import {
    Component
}
from 'angular2/core';

export class Hero {
    id: number;
    name: string;
}

@
Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My favorite heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero"><h1>This statement will list any of my heroes and give you the possibility to add more names.</h1>
      <h2>{{selectedHero.name}} The best movie actors and Commedians!</h2>
      <div><label>id: </label>{{selectedHero.id}}<p> what else can they  do</p></div>
      <div><p>My heroes are exceptionally wonderfull.I can tell you more about them</p>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
   `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
h1,h2 {
        color: #eee443
}
  `]
})
export class AppComponent {
    title = 'Tour of my favorite ACTORS';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}

var HEROES: Hero[] = [
    {
        "id": 1,
        "name": "Mr. paul"
    },
    {
        "id": 2,
        "name": "Peter"
    },
    {
        "id": 3,
        "name": "Celes"
    },
    {
        "id": 4,
        "name": "Vally"
    },
    {
        "id": 5,
        "name": "Tu Thran"
    },
    {
        "id": 6,
        "name": "Vikings"
    },
    {
        "id": 7,
        "name": "Xerox"
    },
    {
        "id": 8,
        "name": "Dr smart"
    },
    {
        "id": 9,
        "name": "Willy"
    },
    {
        "id": 10,
        "name": "Techno-Expert"
    },
    {
        "id": 20,
        "name": "LazyBoy"
    }
];