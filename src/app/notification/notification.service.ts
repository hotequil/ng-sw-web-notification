import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SwService } from '../sw/sw.service';
import { environment } from '../../environments/environment';
import { NotificationPermissions } from './notification-permissions';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private readonly TYPE = environment.SW_EVENT_TYPES.NOTIFICATION;

    constructor(private swService: SwService){}

    async create({ title, body }: { title: string, body: string }): Promise<void>{
        const permission = await Notification.requestPermission();

        if(permission !== NotificationPermissions.GRANTED){
            alert('Active notification browser, please');

            return;
        }

        this.swService.message({
            type: this.TYPE,
            title,
            body
        });
    }

    receiving(): Observable<MessageEvent>{
        return this.swService.onMessage().pipe(filter((event: MessageEvent) => event.data.type === this.TYPE))
    }
}
