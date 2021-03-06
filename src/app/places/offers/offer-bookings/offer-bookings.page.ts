import { PlacesService } from './../../../services/places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import Place from 'src/app/models/Place';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute, 
    private navCtrl:NavController,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
        this.place = place;
      });
    });
  }

}
