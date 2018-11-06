export class playlistModel{
    name: string;
    files: string[];
    screenName: string;

    //TODO rivedere l'inizializzazione dell'array dei files
    constructor(name: string){
        this.name = name;
        this.screenName = this.name + " (" + this.files.length + ")";
        
    }
    
}
