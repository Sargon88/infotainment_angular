import { playlistModel } from "./playlistModel";

export class fileModel{
    name: string;
    type: string;
    playing: boolean;
    inPlaylist: boolean;

    //TODO rivedere il tipo di selectedPlaylist
    constructor(name: string, selectedPlaylist: playlistModel){
        this.name = name;
        this.type = this.setType(name);
        this.inPlaylist = this.isInPlaylist(name, selectedPlaylist);
    }
    


    setType(name: string): string{

        if(name.charAt(name.length-1) == "/"){
            //è una directory
            return "dir";
        } else {
            return "file";
        }
    }
    
    isInPlaylist(name: string, selectedPlaylist: playlistModel): boolean{

        var files = selectedPlaylist.files;
        if(files.indexOf(name) == -1){
            return false;
        } else {
            return true;
        }

    };

}
