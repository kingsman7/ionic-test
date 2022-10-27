import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators'

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  )

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logout() {
    this.auth.logout()
    .then(() => {
      this.router.navigate(["/login"])
    })
    .catch(err => {
      console.log("❌ ~ file: app.component.ts ~ line 30 ~ AppComponent ~ logout ~ err", err)
      
    })
  }
}
