import { Component } from '@angular/core';
import { Precio } from './model/precio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'query2';

  public priceDate!:Precio;

  public cargarPrecios(select:Precio){

    this.priceDate=select;

  }

}
