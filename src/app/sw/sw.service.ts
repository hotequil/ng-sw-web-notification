import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root'
})
export class SwService {
    private alreadyInited = false;

    constructor(private swUpdate: SwUpdate){}

    async init(): Promise<void>{
        if(!this.swUpdate.isEnabled || this.alreadyInited) return;

        this.alreadyInited = true;

        await this.swUpdate.activateUpdate();

        this.swUpdate.available.subscribe(() => {
            if(confirm("New service worker version available, load this page again, please"))
                window.location.reload(true);
        });
    }

    message(message: { [key: string]: string }): void{
        this.controller.postMessage(message);
    }

    private get controller(): ServiceWorker{
        return navigator.serviceWorker.controller as ServiceWorker;
    }
}
