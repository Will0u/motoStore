import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotoClass } from 'src/app/models/moto/moto-class';
import { MotoApiService } from 'src/app/services/data/moto-api.service';

@Component({
  selector: 'app-detail-moto',
  templateUrl: './detail-moto.component.html',
  styleUrls: ['./detail-moto.component.scss']
})
export class DetailMotoComponent implements OnInit {

  // VARIABLES
  idMoto ?: number;
  displayMoto ?: MotoClass;


  constructor(
    private ActivatedRoute : ActivatedRoute,
    private MotoApiService : MotoApiService
    ) { }


  ngOnInit(): void {
    this.idMoto = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get("id"));
    
    this.MotoApiService.getOneMoto(this.idMoto).subscribe(data => {
      this.displayMoto = data;
    });
  }

}
