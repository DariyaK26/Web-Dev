import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album, Photo } from "./models";

@Injectable({
    providedIn:'root'
})

export class AlbumsService{
    main_Url = 'https://jsonplaceholder.typicode.com/albums';
    constructor(private http:HttpClient){}

    getAlbums(): Observable<Album[]>{
        return this.http.get<Album[]>(this.main_Url);
    }

    getAlbum(id: number): Observable<Album>{
        return this.http.get<Album>(`${this.main_Url}/${id}`);
    }

    getPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(this.main_Url + 'albums/' + id + '/photos');
      }
    
      addAlbum(album: Album): Observable<Album> {
        return this.http.post<Album>(this.main_Url + 'albums/', album);
      }
    
      updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(this.main_Url + 'albums/' + album.id, album);
      }
    
      deleteAlbum(id: number): Observable<any> {
        return this.http.delete(this.main_Url + 'albums/' + id);
      }



}