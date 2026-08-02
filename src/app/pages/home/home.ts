import { Component } from '@angular/core';
import { HomesList } from "../homes-list/homes-list"

@Component({
  selector: 'app-home',
  imports: [HomesList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
