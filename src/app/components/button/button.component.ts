import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
    @Input() type = 'button';
    @Input() click = () => {};
    @Input() text!: string;
    @Input() disabled = false;
}
