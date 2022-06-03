import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotoClass } from 'src/app/models/moto/moto-class';
import { MotoApiService } from 'src/app/services/data/moto-api.service';

@Component({
  selector: 'app-detail-type',
  templateUrl: './detail-type.component.html',
  styleUrls: ['./detail-type.component.scss']
})
export class DetailTypeComponent implements OnInit {

  constructor(
    private MotoApiService : MotoApiService,
    private ActivatedRoute : ActivatedRoute
  ) { }

  typeUrl ?: string ;
  displayArray : MotoClass[] = [];


  ngOnInit(): void {
    this.typeUrl = <string>this.ActivatedRoute.snapshot.paramMap.get("type")

    this.MotoApiService.getMotos().subscribe(data => {
      data.forEach(moto => {
        if (this.typeUrl && moto.type) {
          if (this.typeUrl.trim().toLowerCase() == moto.type.trim().toLowerCase() ) {
            this.displayArray.push(moto)
          }
        }
      });
    })
  }

}
