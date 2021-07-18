'use strict'

importScripts('./ngsw-worker.js');
importScripts('./sw-event-types.js');

self.addEventListener('message', event => {
    const data = event && event.data;

    if(data && data.type === self.types.NOTIFICATION)
        self.registration.showNotification(
            data.title,
            {
                body: data.body,
                icon: './assets/angular.png'
            }
        );
});
