import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
    currentImages = [0, 0]; // Track which image is active for each project

  nextImage(index: number): void {
    const images = document.querySelectorAll(`.project-card:nth-child(${index + 1}) .carousel-img`);
    if (images.length > 0) {
      images[this.currentImages[index]].classList.remove('active');
      this.currentImages[index] = (this.currentImages[index] + 1) % images.length;
      images[this.currentImages[index]].classList.add('active');
    }
  }

  prevImage(index: number): void {
    const images = document.querySelectorAll(`.project-card:nth-child(${index + 1}) .carousel-img`);
    if (images.length > 0) {
      images[this.currentImages[index]].classList.remove('active');
      this.currentImages[index] =
        (this.currentImages[index] - 1 + images.length) % images.length;
      images[this.currentImages[index]].classList.add('active');
    }
  }

}
