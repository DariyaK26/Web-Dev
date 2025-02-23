import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { ProduclistComponent } from "./produclist/produclist.component";

const routeConfig: Routes=[
    {
        path: '',
        component: HomeComponent,
        title: "Home Page"
    },{
        path: "details/:id",
        component: DetailsComponent,
        title: 'Details Page'
    },{
        path: "productlist/:category",
        component: ProduclistComponent,
        title: 'Category Page'
    },
];
export default routeConfig;