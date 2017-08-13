import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { mySort }  from './sort.pipe';
import { gameData } from './gameData.service';





@NgModule({
  imports:      [BrowserModule, FormsModule],
  providers:[gameData],
  declarations: [AppComponent, mySort],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
