import { Component } from '@angular/core';
import { TiltService } from './tilt.service';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [CommonModule],
})
export class App {
  status = 'Venter på data...';

  constructor(private tiltService: TiltService,
               private cdr: ChangeDetectorRef
  ) {
    this.tiltService.getTiltStatus().subscribe(data => {
      this.status = data;
      this.cdr.detectChanges(); // ← Tving Angular til å oppdatere skjermen
    });
  }
}