import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { NotificationService } from '../notification/notification.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{
    form = this.fb.group({
        title: [null, Validators.required],
        body: [null, Validators.required],
    });

    private notificationReceivingSubscription!: Subscription;

    constructor(private fb: FormBuilder, private notificationService: NotificationService){}

    ngOnInit(): void{
        this.notificationReceivingSubscription = this.notificationService.receiving().subscribe(event => {
            if(event?.data?.clicked) alert('Notification clicked');
        });
    }

    submit(): void{
        if(this.form.invalid) return;

        this.notificationService.create(this.form.getRawValue());

        this.form.reset();
    }

    ngOnDestroy(): void{
        this.notificationReceivingSubscription?.unsubscribe?.();
    }
}
