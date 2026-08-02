import { Component, input } from '@angular/core';
import { HomeModel } from '../../models/home.mode';

@Component({
  selector: 'app-homes-list',
  imports: [],
  templateUrl: './homes-list.html',
  styleUrl: './homes-list.css',
})
export class HomesList {

  homeDetails = input<HomeModel>();

}
