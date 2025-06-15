import { Component } from '@angular/core';
import { TiltService } from './tilt.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [CommonModule],
})
export class App {
  status$ : Observable<boolean>;

  constructor(private tiltService: TiltService) {
    this.status$ = this.tiltService.getTiltStatus();;
  }

}