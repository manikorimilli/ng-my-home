import { Component, inject } from '@angular/core';
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

  homeDetailsList: HomeModel[] = []

  homeService = inject(HomeService)

  constructor() {
    this.homeDetailsList = this.homeService.getHomeDetailsList()

  }

}
