import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing-location",
  standalone: true,
  // 5.1
  imports: [CommonModule, RouterModule],
  template: `
  
  <!-- /*----------  2.2 Property binding ----------*/ -->
  
    <section class="listing">
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        class="listing-photo"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <!-- 5.2 passing data via url route to details with [] -->
      <a [routerLink]="['details', housingLocation.id]">Learn more</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  /*---------- 2.1 Input decorator ----------*/
  @Input() housingLocation!: HousingLocation;
}
