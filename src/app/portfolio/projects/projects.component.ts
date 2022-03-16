import { HeaderService } from './../../core/services/header.service';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  isHome$ = this.headerService.isHome();
  projects$ = this.isHome$.pipe(
    mergeMap((atHome) => this.projectsService.getProjects(atHome))
  );

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      useSmallerHeadings: false,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: '',
    },
  ];

  constructor(
    private projectsService: ProjectsService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {}
}
