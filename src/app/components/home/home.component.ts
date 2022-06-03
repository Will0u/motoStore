import { Component, OnInit } from '@angular/core';
import { MotoClass } from 'src/app/models/moto/moto-class';
import { MotoApiService } from 'src/app/services/data/moto-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private MotoApiService : MotoApiService
  ) { }

    // VARIABLES
    motoFlashArray : MotoClass[] = [] ;


  ngOnInit(): void {
    this.MotoApiService.getMotos().subscribe(motoArray => {
      motoArray.forEach(moto => {
        if (moto.venteFlash) {
          this.motoFlashArray.push(moto)
        }
      });
    })
    console.log(this.motoFlashArray)  
  }

}
