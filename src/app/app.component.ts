import { Component } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tkt';

  events!: any;
  constructor(private _eventService: EventsService) {
    this._eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
