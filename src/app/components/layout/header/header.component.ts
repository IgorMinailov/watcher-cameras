import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../../core';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    public translate: TranslateService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
    this.authService.getUserChange().subscribe(data => {
      if (data) {
        this.getUser();
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  changeTheme(theme: string): void {
    const parent = this.el.nativeElement.offsetParent;
    if (theme === 'dark') {
      this.renderer.addClass(parent, 'dark-theme');
    } else {
      this.renderer.removeClass(parent, 'dark-theme');
    }
  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout(): void {
    this.authService.logout();
    this.user = null;
  }
}
