import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RoundPipe } from './round.pipe';
import { ReversePipe } from './reverse.pipe';
import { NoWhitespacePipe } from './no-whitespace.pipe';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe,
    ReversePipe,
    NoWhitespacePipe,
    PercentagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
