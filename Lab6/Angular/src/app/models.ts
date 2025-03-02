export interface Photo{
    albumId: number;
    id: number;
    title:string; 
    url:string;
    thubnailUrl: string;
}

export interface Album{
    usedId: number;
    id: number;
    title: string;
}