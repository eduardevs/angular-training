1. COMPONENT ->
composed by 
TS
COMPONENT
CLASS
TEMPLATE

command :
```bash
ng generate component HousingLocation --standalone --inline-template
```
ng generate component --standalone
--standalone : new ccomponent of angular with reduced logic
                        ----

2. PASSING DATA (from parent component to child)
input properties: 

Interface -> contract btw us
we can expect the data to follow the structure defined by the interfcae
it to shape the data


2.1 - INPUT DECORATOR
  // input decorater : requjires @ symbol
  // prefix with the input decorator (input property)
- ! non null assertion operator
  // add ! to the type to indicate that the property will be initialized later
  // estimation point ! is called the non-null assertion operator - it tells TypeScript compiler that the property will be not nulled or undefined

2.2 - property binding : exemple([src]) 
```js
    <img [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}" class="listing-photo" >
```

- double curly brace {}
used for angular interpolation syntax
used to mix in values and expressions into strings in our templates (value will be a string)

                        ----

3. iterate over an array : ngFor directive (like for loop)
with it we are going to be able to use the angular templating syntax
    (let housingLocation of ..)
```js
   <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
      ></app-housing-location>
```
    it creates a tempalte variable called housingLocation which represents an entry from the housingLocation list

- next step: passing housingLocation data to the housinglocaiton component
    with square brackets []
    this shjould be a separate attribute on the app-housing-location component tag and not a part of ngFor
    
    [housingLocation]="housingLocation"
    ```js
   <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
```


_______________ DAY 2
SUMMARY :
4. Routing

--

4. ROUTING
main.ts
- routing needs config for it, how to enable? * 
provideRouter -> 
routes define which path link to components in the app

4.1 - create route.ts for route definition: app/routes.ts
routeConfig have to be available to files that import our routes -> add export routerConfig;

then :

4.2 - import it in the app.component.ts

import { RouterModule } from "@angular/router";

4.3 - Adding router directive | In the template add the tag <router-outlet> 
* Replace the template <home-component> by <router-outlet>
adds functionality but not including template. the html will persists bewteen the pages

4.4 - the main page is blank cuz we havent defined any route yet
- in routes.ts
- the path represents which url matches which component

4.5 - to make it work, define routes in main.ts

import routeConfig from "./app/routes";

* replacing   provideRouter([]) by
  provideRouter(routeConfig)

  NOW WE RECOVER THE HOME PAGE by routing !

                    ----

5. DETAILS PAGE  (ng -> angular cli)
ng g c details --standalone --inline-template

- Making 2 updates :
1 - adding a new route 
2 - add a link to details page
updating the component decorator metadata to include an anchor element as the last child of the element [router link directive]
5.1
import RouterModule

adding router

```
  <a routerLink="details">Learn more</a>
```

5.2 passing data to the component details

ways : being able to pass state and data to a route
or
pass some sort of identifier via the URL and then refence the housing location by ID.

sOLUTION 2 send informatikon to the details route via the URL :
adding [] crochets to the routerlink to support dynamic values

from routerLink="details"
to [routerLink]="['details']"

passing the id
   <a [routerLink]="['details', housingLocation.id]">

   now the url has a number of id ->
   localhost:4200/details/2

   THIS DOESNT WORK YET ! THERE IS NO ROUTE THAT MATCH THIS

5.3 - in the route.ts
- update following : 'details/:id'


5.4
in the DetailsComponent page ts

ActivatedRoute from angularrouter
inject from angular/core

in the class
route: ActivateRoute = inject(ActivateRoute)

housingLocationId= 0;

constructor() {
  this.housingLocationId = Number(this.route.snapshot.params[id])
}

now in the template :
using interpolation to append the id to the text

details works ! {{housingLocationId}}


review
1. navigated in our app using angular router and the routerlink directive

2. passed info to a route using the parameterized routes

3. retrieved information from a route component using teh ActivatedRoute feature


                ----- https://www.youtube.com/watch?v=-jRxG84AzCI   -> 0.55s
6. SERVICE AND DI (DISPLAYING DATA)
How to get data to be available in the details component ?

Service and Dependency Injection

service that is reponsible from retrieving the data from the data source providing helpful utility that allow us to access the data and in some cases, having functions that allows us to persit data to a data source.

6.1 CREATE A SERVICE 






                ------
7. FORMS



                -------
8. HTTP














