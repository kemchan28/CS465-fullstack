import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import {Trip} from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard implements OnInit {
  @Input('trip') trip: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }

  public editTrip(tripCode: string): void {
    localStorage.removeItem('editTripCode');
    localStorage.setItem('editTripCode', tripCode);
    this.router.navigate(['edit-trip']);
  }
}
