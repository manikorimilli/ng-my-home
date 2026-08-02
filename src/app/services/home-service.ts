import { Injectable } from '@angular/core';
import { HomeModel } from '../models/home.mode';

@Injectable({ providedIn: 'root' })
export class HomeService {

    url = "http://localhost:3000/locations"

    homeDetailsList: HomeModel[] = []

    constructor() {
    }

    async getHomeDetailsList(): Promise<HomeModel[]> {

        const data = await fetch(this.url);
        return await data.json() ?? []

    }

    async getHomeDetailsById(Id: Number): Promise<HomeModel | undefined> {
        const data = await fetch(`${this.url}/${Id}`);
        return await data.json() ?? {}
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(firstName);
        console.log(lastName);
        console.log(email)
    }
}
