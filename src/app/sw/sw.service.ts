import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { Observable, Subject } from 'rxjs';

export type Message = { [key: string]: string };

@Injectable({
    providedIn: 'root'
})
export class SwService {
    private alreadyInited = false;
    private messaging = new Subject<MessageEvent>();

    constructor(private swUpdate: SwUpdate){}

    async init(): Promise<void>{
        if(!this.swUpdate.isEnabled || this.alreadyInited) return;

        this.alreadyInited = true;

        await this.swUpdate.activateUpdate();

        this.swUpdate.available.subscribe(() => {
            if(confirm("New service worker version available, load this page again, please"))
                window.location.reload(true);
        });

        this.sw.onmessage = (event: MessageEvent) => this.messaging.next(event);
    }

    message(message: Message): void{
        this.controller.postMessage(message);
    }

    onMessage(): Observable<MessageEvent>{
        return this.messaging.asObservable();
    }

    private get controller(): ServiceWorker{
        return this.sw.controller as ServiceWorker;
    }

    private get sw(): ServiceWorkerContainer{
        return navigator.serviceWorker as ServiceWorkerContainer;
    }
}
