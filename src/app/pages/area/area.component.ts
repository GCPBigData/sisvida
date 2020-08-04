import { Component, OnInit } from '@angular/core';
import { Area } from './area';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AreaService } from './area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  showSpinner = false;
  results$;
  responseArea: Area;
  area$: Observable<Area>;

  constructor(
    private router: Router,
    private areaService: AreaService
  ) {
  }

  ngOnInit(): void {
     this.reloadData();
  }

  reloadData() {
    this.area$ = this.areaService.getAreas();
    this.showSpinner = true;
    this.areaService.getAreas().subscribe(

      results$ => this.responseArea = results$

    );
    if (this.results$ == null) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 1000);
    }
  }

}
