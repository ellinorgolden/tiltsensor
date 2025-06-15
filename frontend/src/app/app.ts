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
  status: boolean | null = null;

  constructor(private tiltService: TiltService, private cdr: ChangeDetectorRef) {
    this.tiltService.getTiltStatus().subscribe((data: boolean) => {
      this.status = data;
      console.log('Status i komponent:', data);
      this.cdr.detectChanges(); 
    });
  }
}