import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected typo here
})
export class AppComponent {
  title = 'Blog';

  // Adjusted to remove the parameter if it's not used
  getName(): void {
    alert('name');
  }

  displayVal = '';

  getValue(val: string): void {
    console.warn(val);
    this.displayVal = val;
  }
}
