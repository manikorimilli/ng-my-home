import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home-service';
import { HomeModel } from '../../models/home.mode';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-overview',
  imports: [ReactiveFormsModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {

  private route = inject(ActivatedRoute);

  homeService = inject(HomeService)

  overviewId = 0;

  homeServiceDetails = signal<HomeModel | undefined>(undefined);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })



  constructor() {
    this.overviewId = Number(this.route.snapshot.paramMap.get('id'));



    this.homeService.getHomeDetailsById(this.overviewId).then(homeServiceDetails => {
      this.homeServiceDetails.set(homeServiceDetails)
    })


  }

  submitApplication() {
    this.homeService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }
}




