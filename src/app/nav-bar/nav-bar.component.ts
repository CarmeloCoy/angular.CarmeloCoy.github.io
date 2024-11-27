import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    imports: [],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
    showNavbar = false;

    toggleNavbar(): void {
        this.showNavbar = !this.showNavbar;
    }
}
