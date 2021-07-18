import { Component, OnInit } from '@angular/core';

import { SwService } from './sw/sw.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(private swService: SwService){}

    ngOnInit(): void{
        this.swService.init();
    }
}
