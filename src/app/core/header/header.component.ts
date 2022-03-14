import { BioService } from './../services/bio.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItens = [
    {
      title: 'Sobre Mim',
      homePath: '/',
      fragment: 'about',
      pagePath: '/about',
    },
    {
      title: 'Meus Projetos',
      homePath: '/',
      fragment: 'projects',
      pagePath: '/projects',
    },
    { title: 'Meu Blog', homePath: '/blog', fragment: '', pagePath: '/blog' },
  ];

  constructor(
    private bioService: BioService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {}
}
