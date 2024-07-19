import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
  getName(name:any)
  {
    alert("name");
  }
  displayVal='';
  getValue(val:string)
  {
    console.warn(val)
    this.displayVal=val
  }


}
