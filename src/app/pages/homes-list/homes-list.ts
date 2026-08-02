import { Component, input } from '@angular/core';
import { HomeModel } from '../../models/home.mode';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homes-list',
  imports: [RouterLink],
  templateUrl: './homes-list.html',
  styleUrl: './homes-list.css',
})
export class HomesList {

  homeDetails = input<HomeModel>();

}
