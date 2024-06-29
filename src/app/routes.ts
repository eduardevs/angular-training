import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// 4.1
const routeConfig: Routes = [
    {
        // 4.4
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    // 5

    {
        path: 'details/:id', // 5.3 adding id
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;