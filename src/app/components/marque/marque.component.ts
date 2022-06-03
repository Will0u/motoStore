import { Component, OnInit } from '@angular/core';
import { MotoApiService } from 'src/app/services/data/moto-api.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss']
})
export class MarqueComponent implements OnInit {

  constructor(
    private MotoApiService : MotoApiService
  ) { }


  // VAR
  marqueArray : string[] = []


  ngOnInit(): void {
    this.MotoApiService.getMotos().subscribe(motoArray => {
      motoArray.forEach(moto => {
        if (moto.marque && !this.marqueArray.includes(moto.marque)) {
          this.marqueArray.push(moto.marque)
        }
      });
    })
  }


}
