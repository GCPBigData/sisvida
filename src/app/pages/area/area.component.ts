import { Component, OnDestroy, OnInit } from '@angular/core';
import { Area } from './area';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AreaService } from './area.service';
import { environment } from '../../../environments/environment';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, OnDestroy {

  public readonly BASE_URL = 'http://191.252.204.57:8080/area/stream/';
  public sseStream: Subscription;
  areas: Area[] = [];

  showSpinner = false;
  results$;
  responseArea: Area;
  area$: Observable<Area>;

  constructor(
    private router: Router,
    private areaService: AreaService
  ) {

    this.sseStream = this.areaService
      .observeMessages(`${this.BASE_URL}`)
      .pipe(
        map((area: any) => {
          area.date = new Date();
          this.showSpinner = true;
          return area;
        }),
        take(10)
      )
      .subscribe((area: Area) => {
        this.areas.push(area);
      });

  }

  ngOnInit(): void {
     /*this.reloadData();*/
  }

  ngOnDestroy(): void {
    if (this.sseStream) {
      this.sseStream.unsubscribe();
    }
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
