import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NotificationService } from '../notification/notification.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent{
    form = this.fb.group({
        title: [null, Validators.required],
        body: [null, Validators.required],
    });

    constructor(private fb: FormBuilder, private notificationService: NotificationService){}

    submit(): void{
        if(this.form.invalid) return;

        this.notificationService.create(this.form.getRawValue());

        this.form.reset();
    }
}
