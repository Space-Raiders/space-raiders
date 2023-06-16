import { Component, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {


  isNavbarVisible = true;
  prevScrollPos = window.pageYOffset;


  scrollToComponent(componentName: string) {
    const componentElement = document.getElementById(componentName);
    if (componentElement) {
      componentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    this.isNavbarVisible = this.prevScrollPos > currentScrollPos;
    this.prevScrollPos = currentScrollPos;
  }
}
