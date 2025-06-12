import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TiltService {
  private socket = io('http://localhost:3000');

  getTiltStatus(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('tilt-status', (data: string) => {
        observer.next(data);
      });
    });
  }
}