import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotoClass } from 'src/app/models/moto/moto-class';
import { MotoApiService } from 'src/app/services/data/moto-api.service';

@Component({
  selector: 'app-detail-marque',
  templateUrl: './detail-marque.component.html',
  styleUrls: ['./detail-marque.component.scss']
})
export class DetailMarqueComponent implements OnInit {

  constructor(
    private MotoApiService : MotoApiService,
    private ActivatedRoute : ActivatedRoute
  ) { }

  marqueUrl ?: string ;
  displayArray : MotoClass[] = [];


  ngOnInit(): void {
    this.marqueUrl = <string>this.ActivatedRoute.snapshot.paramMap.get("marque")

    this.MotoApiService.getMotos().subscribe(data => {
      data.forEach(moto => {
        if (this.marqueUrl && moto.marque) {
          if (this.marqueUrl.trim().toLowerCase() == moto.marque.trim().toLowerCase() ) {
            this.displayArray.push(moto)
          }
        }
      });
    })
  }

}
