// header.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerColorSubject = new BehaviorSubject<string>('text-zinc-500');
  headerColor$ = this.headerColorSubject.asObservable();

  setHeaderColor(color: string) {
    this.headerColorSubject.next(color);
  }
}
