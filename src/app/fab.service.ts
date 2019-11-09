import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export interface Entry {
  title: string;
  icon: string;
  action: (ev: Event) => void;
}

@Injectable({
  providedIn: 'root'
})
export class FabService {
  private visible = new BehaviorSubject<boolean>(false);
  visilbe$ = this.visible.asObservable().pipe(distinctUntilChanged());

  private entries = new BehaviorSubject<Entry[]>([]);
  entries$ = this.entries.asObservable().pipe(distinctUntilChanged());

  constructor() {}

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }

  update(entries: Entry[]) {
    this.entries.next(entries);
  }
}
