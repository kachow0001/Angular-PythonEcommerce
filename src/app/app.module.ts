import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { AppComponent } from './app.component';
import { TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    TableModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
