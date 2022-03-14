import { Project } from './../models/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeAll, Observable, filter, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(featured?: boolean): Observable<Project[]> {
    let projects$ = this.http.get<Project[]>('assets/json/projects.json');

    if (featured) {
      return projects$.pipe(
        mergeAll(),
        filter((project) => project.featured || false),
        toArray()
      );
    }

    return projects$;
  }
}
