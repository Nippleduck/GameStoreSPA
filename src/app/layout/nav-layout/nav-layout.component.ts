import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss']
})
export class NavLayoutComponent {
  navItems = [
    { title: 'Games', link: ''},
    { title: 'Community', link: ''},
    { title: 'About', link: ''},
    { title: 'Support', link: ''}
  ]
}
