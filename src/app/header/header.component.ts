import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activepath = 'signup';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(path: string) {
    this.activepath = path;
    if (path === 'login') {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
