import { statusbar } from "./statusbar";

export class status{
    //params
    statusbar: statusbar;
    inCall: boolean;


    //functions
    setStatusbar(statusbar: statusbar): void {
        this.statusbar = statusbar;
    }

    getStatusbar(): statusbar{
        return this.statusbar;
    }

    setInCall(incall: boolean): void{
        this.inCall = incall;
    }

    isIncall(): boolean{
        return this.inCall;
    }

}