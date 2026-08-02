import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home-service';
import { HomeModel } from '../../models/home.mode';


@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {

  private route = inject(ActivatedRoute);

  homeService = inject(HomeService)

  overviewId = 0;

  homeServiceDetails = signal<HomeModel | undefined>(undefined);

  constructor() {
    this.overviewId = Number(this.route.snapshot.paramMap.get('id'));

    const home = this.homeService.getHomeDetailsById(this.overviewId);

    this.homeServiceDetails.set(home);


  }
}




