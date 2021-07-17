import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { InputModule } from '../components/input/input.module';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
    declarations: [
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputModule,
        ButtonModule
    ]
})
export class MainModule {}
