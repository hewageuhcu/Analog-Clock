import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatchComponent } from "./watch/watch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A-Clock';
}
