import { Injectable } from '@angular/core';

import { SwService } from '../sw/sw.service';
import { environment } from '../../environments/environment';
import { NotificationPermissions } from './notification-permissions';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    constructor(private swService: SwService){}

    async create({ title, body }: { title: string, body: string }): Promise<void>{
        const permission = await Notification.requestPermission();

        if(permission !== NotificationPermissions.GRANTED){
            alert('Active notification browser, please');

            return;
        }

        this.swService.message({
            type: environment.SW_EVENT_TYPES.NOTIFICATION,
            title,
            body
        });
    }
}
