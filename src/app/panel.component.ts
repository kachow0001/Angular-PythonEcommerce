import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'panel-bar',
  templateUrl: './panel.component.html',
  /*styleUrls: ['./panel.component.css']*/



})
export class PanelComponent {
  title: String = 'Cheap Thrills';
  showImage :Boolean = false;
  filterText:String;
  movies :any[] = []
    
  toggleImage(): void {
   this.showImage = !this.showImage
  }
  }

