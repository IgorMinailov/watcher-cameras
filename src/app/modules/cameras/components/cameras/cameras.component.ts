import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

import { switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

import { FakeApiService } from '../../../../core';
import { Cameras } from '../../../../shared/models/Cameras';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit, AfterContentInit {

  @ViewChild('grid') grid: MatGridList;
  cameras$: Observable<Cameras>;

  gridByBreakpoint = {
    xl: 6,
    lg: 5,
    md: 4,
    sm: 2,
    xs: 1
  };
  cols = 0;
  constructor(private apiService: FakeApiService, private observableMedia: MediaObserver) { }

  ngOnInit(): void {
   this.cameras$ = this.startPolling();
  }

  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange[]) => {
      this.cols = this.gridByBreakpoint[change[0].mqAlias];
    });
  }

  startPolling(): Observable<Cameras> {
    // polling
    return timer(0, 500).pipe(
      switchMap(() => this.apiService.getCamerasList())
    );
  }
}
