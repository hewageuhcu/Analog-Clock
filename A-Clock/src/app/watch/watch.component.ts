import { Component,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})
export class WatchComponent implements OnInit {
  @ViewChild('hrHand')
constructor(){}
ngOnInit(){}
}
