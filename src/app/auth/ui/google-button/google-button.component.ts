import { Component, output } from '@angular/core';

@Component({
  selector: 'app-google-button',
  standalone: true,
  imports: [],
  templateUrl: './google-button.component.html',
  //styleUrl: './google-button.component.scss'
})
export class GoogleButtonComponent {
  onClick = output<void>();
}
