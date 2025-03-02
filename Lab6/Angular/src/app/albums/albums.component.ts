import { Component, inject, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-albums',
  imports: [ CommonModule, RouterLink, FormsModule],
  template: `
    <h3>List of albums</h3>

<fieldset>
  <input type="text" [(ngModel)]="newAlbum">
  <button type="submit" (click)="addAlbum()">Add album</button>
</fieldset>

<div *ngIf="loaded">
  <div *ngIf="albums" class="container-albums">
    <ul class="inner-container">
      <li *ngFor="let album of albums" class="inner-element">
        <a routerLink="/albums/{{album.id}}"> {{album.id}}. {{album.title}}</a>
        <button (click)="deleteAlbum(album.id)">Delete</button>
      </li>
    </ul>
  </div>
</div>

<p *ngIf="!loaded">The list is loading...</p>
  `,
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums?: Album[];
  loaded?: boolean;
  newAlbum='';

  albumsService = inject(AlbumsService); // Вместо конструктора используем inject()


  ngOnInit(): void {
    this.getAlbums();

  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    const newAlbum: Album = {
      id: this.albums?.length!+1,
      title: this.newAlbum,
      usedId: 1
    };

    this.loaded = false;

    this.albumsService.addAlbum(newAlbum).subscribe(x => {
      this.albums?.push(newAlbum);
      this.newAlbum = '';
      console.log(x);
      this.loaded = true;
    })
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted ' + id);
    });
    this.albums = this.albums?.filter(x => x.id != id);
  }

}
