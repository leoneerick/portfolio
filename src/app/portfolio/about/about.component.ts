import { BioService } from './../../core/services/bio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
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
