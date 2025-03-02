import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'home', component: HomeComponent},
    {path:'albums', component:AlbumsComponent},    
    {path:'albums/:id', component:AlbumDetailComponent},
    {path:'album:/id/photos', component:AlbumPhotosComponent},
    {path:'about', component:AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}