import { Component, inject, signal } from '@angular/core';
import { HomesList } from "../homes-list/homes-list"
import { HomeModel } from '../../models/home.mode';
import { HomeService } from '../../services/home-service';

@Component({
  selector: 'app-home',
  imports: [HomesList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  homeDetailsList = signal<HomeModel[]>([])

  homeService = inject(HomeService)

  constructor() {
    this.homeService.getHomeDetailsList().then((list) => {
      this.homeDetailsList.set(list)

    })
  }

}
