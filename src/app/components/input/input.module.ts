import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

@NgModule({
    declarations: [
        InputComponent
    ],
    exports: [
        InputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class InputModule { }
