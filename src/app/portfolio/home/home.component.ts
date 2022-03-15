import { BioService } from './../../core/services/bio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bio$ = this.bioService.getBio();

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: false,
    },
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: '',
      useSmallerHeadings: true,
    },
  ];

  constructor(private bioService: BioService) {}

  ngOnInit(): void {}
}
