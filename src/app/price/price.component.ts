import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listhistorical } from '../model/listhistorical';
import { Precio } from '../model/precio';
import { Symbols } from '../model/symbols';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input() public priceDate!:Precio;
  
  constructor( 
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
   
   
  } 
  

}
