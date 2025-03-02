import { Component, OnInit } from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {CommonModule, Location} from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports:[FormsModule, CommonModule],
  template:`
  <div *ngIf="loaded" class="container">
  <div *ngIf="album">
    <h3>Album Detail #{{album.id}}</h3>
    <input [(ngModel)]="album.title">
    <button class="btn success" type="button" (click)="updateTitle(album!)">Save</button>
    <p *ngIf="saving">Updates are saving...</p>
  </div>

  <a routerLink="photos">Photos</a>

  <div>
    <button class="btn info" type="button" (click)="goBack()">Go Back</button>
  </div>
</div>

<div *ngIf="!loaded">Data is loading...</div>
  `,
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album?: Album;
  loaded?: boolean;
  saving?: boolean;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    // const id:number = Number(this.route.snapshot.paramMap.get('id'));
    // this.album = ALBUMS.find((x) => x.id === id);

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((x) => {
          this.album = x;
          this.loaded = true;
      });
    });
  }

  updateTitle(album: Album) {
    this.saving = true;
    this.albumsService.updateAlbum(album).subscribe((updated) => {
      console.log(updated);
      this.saving = false;
    });
  }

  goBack() {
    this.location.back();
  }
}