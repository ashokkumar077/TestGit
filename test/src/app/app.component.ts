import {Component, OnInit} from '@angular/core'
import { gameData } from './gameData.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'my-app',
  styles: 
  [
    
    'li {list-style: none; }.main-container{min-width:200px; background: whitesmoke; border: 1px solid grey; display:inline-block; padding:5px;} ul{padding: 0;margin:0} '
    
    ],
  
  template: `


  <div class="main-container"  >
    <span (click)="toggleShow()">
    Game 
    </span>     
    <div *ngIf="show" style="margin-top:10px;">
     <input [(ngModel)]="term">
  
  <ul>
      <li *ngFor="let data of mainData  | mySort:term">
      <input id="{{data.name}}" type="checkbox" value="{{data.name}}" [checked]="exist(data.name)" (click)="toggleSelection(data.name)" />
      <label for="{{data.name}}">{{data.name}}</label>
      </li>
  </ul>
    </div>
  </div>
  
  <h1> slected shorting array</h1>
    <ul>
      <li *ngFor="let data of selection">
        {{data}}
      </li>
  </ul>

  `
})

export class AppComponent implements OnInit {
    show:any=true;
    toggleShow(){
      this.show = !this.show
    }
    mainData:any = [];
    constructor(private _gameData:gameData){
    }
    ngOnInit(){
        this. mainData = this._gameData.getData()
      }

 

      selection:any = [];

    exist(newData:any){
    	return this.selection.indexOf(newData) > -1
    }
    toggleSelection(newData:any) {
     let idx = this.selection.indexOf(newData);

     if (idx > -1) {
       this.selection.splice(idx, 1);
     }
     else {
       
       this.selection.push(newData);
       console.log(this.selection)
    }
   };
}
