import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
// 4.2 
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt=""
          aria-hidden="true"
        />
      </header>
      <!-- 4.3 -->
      <!-- <app-home></app-home> -->
      <section class="content">
        
         <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = "homes";
}
