import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent{
    @Input() label!: string;
    @Input() placeholder!: string;
    @Input() name!: string;
    @Input() form!: FormGroup;
    @Input() type = 'text';
    @Input() required = false;

    id!: string;

    constructor() {
        this.id = uuidv4();
    }
}
