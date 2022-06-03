import { Component, OnInit } from '@angular/core';
import { MotoApiService } from 'src/app/services/data/moto-api.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  constructor(
    private MotoApiService : MotoApiService
  ) { }

  // VARIABLE
  typeArray : string[] = []

  ngOnInit(): void {
    this.MotoApiService.getMotos().subscribe(motoArray => {
      motoArray.forEach(moto => {
        if (moto.type && !this.typeArray.includes(moto.type)) {
          this.typeArray.push(moto.type)
        }
      });
    })
  }

}
