import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class TiltService {
  private socket = io('http://localhost:3000');

  getTiltStatus(): Observable<boolean> { 

    return new Observable(observer => {
      this.socket.on('tilt-status', (data: any) => {
        const isUp = data === true || data === '1' || data === 1;
        observer.next(isUp);
      });
    });
  }
}