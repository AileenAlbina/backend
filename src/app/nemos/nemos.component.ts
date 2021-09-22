import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Symbols } from '../model/symbols';
import { BackendService } from '../services/backend.service';
import { Precio} from '../model/precio';
import { Listhistorical } from '../model/listhistorical';
import { Historical } from '../model/historical';

@Component({
  selector: 'app-nemos',
  templateUrl: './nemos.component.html',
  styleUrls: ['./nemos.component.css']
})

export class NemosComponent implements OnInit {

  @Output() loadPrices: EventEmitter<Precio> = new EventEmitter<Precio>();

  public listSymbols!:Symbols[]; 
  public listSymbolsFilter!:Symbols[];  
  public listHistoricalFilter!:Listhistorical[];
  public pricesDate!: Precio;
  public price: number[] = [];
  public date:string[] = [];
  public hist:Historical[]=[];

  constructor(private backendService :BackendService) { 
  }

  ngOnInit() {
    
    this.listarSymbols();
  
  }

 public  listarSymbols()
  {
     this.backendService.listSymbols().subscribe((data) => 
    {this.listSymbols = data});

  }

  public showPrice(select: string)
  {
    
      this.backendService.listSymbolsBySymbol(select).subscribe(data => {this.listSymbolsFilter = data;  // precios
        this.backendService.listHistoricalBySymbol(select).subscribe(dates => {this.listHistoricalFilter = dates; //fechas
          
          this.createArray(this.listSymbolsFilter, this.listHistoricalFilter);
         
          this.pricesDate.date=this.date;
          this.pricesDate.price=this.price;
   //       console.log("price"+this.pricesDate);
          this.loadPrices.emit(this.pricesDate);
        });    
      });
  
    
  }

  public createArray(symbols:Symbols[], historical: Listhistorical[])
  {
      symbols.forEach(elelemt => this.price.push(elelemt.price));
      historical.forEach((element) => { this.hist=element.historical;} );
      this.hist.forEach(element => this.date.push(element.date));
  }

  
}
