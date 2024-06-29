import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // 5.4 - adding dynamic values passed from route
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
