import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

    constructor(private fb: FormBuilder){}

    submit(): void{}
}
