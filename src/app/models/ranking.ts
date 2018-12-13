export class Ranking {
    _id:string;
    _rev:string;
    _attachments:any;
    type:"ranking";
    dateCreated:number;
    isDeleted:boolean;
    description:string;
    year:number;
    releaseDate:number;
    visible:boolean;
    columns:string[];
}
