import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {

  private route = inject(ActivatedRoute);

  overviewId = 0;

  constructor() {
    this.overviewId = Number(this.route.snapshot.paramMap.get('id'))
  }



}
