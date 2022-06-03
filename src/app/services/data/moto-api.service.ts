import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MotoClass } from 'src/app/models/moto/moto-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotoApiService {

  // VARIABLES
  url = environment.url

  constructor(
    private HttpClient : HttpClient
  ) { }


  getMotos () : Observable<MotoClass[]> {
    return this.HttpClient.get<MotoClass[]>(this.url+"motos.json")
  }

  getOneMoto(id : number ) : Observable<MotoClass> {
    return this.HttpClient.get<MotoClass>(this.url+"motos/"+id+".json")
  }

}
