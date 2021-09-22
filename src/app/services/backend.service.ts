import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Symbols } from '../model/symbols';
import { Listhistorical } from '../model/listhistorical';



@Injectable({
  providedIn: 'root'
})

export class BackendService {
  
  private AUTH_SERVER: string = "http://localhost:9090/api";
  



  constructor(private http:HttpClient) { }

  public listSymbols():Observable<Symbols[]>
  {
    return this.http.get<Symbols[]>(`${this.AUTH_SERVER}/symbols`);

  }

  public listSymbolsBySymbol(symbol:string):Observable<Symbols[]>
  {
    
    console.log(this.http.get<Symbols[]>(`${this.AUTH_SERVER}/symbols/${symbol}`));
    return this.http.get<Symbols[]>(`${this.AUTH_SERVER}/symbols/${symbol}`);
  }

  public listHistoricalBySymbol(select:string):Observable<Listhistorical[]>
  {
    return this.http.get<Listhistorical[]>(`${this.AUTH_SERVER}/historical/${select}`);
  }

  
}