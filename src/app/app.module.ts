import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('sw.js', { enabled: true }),
        HeaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}
