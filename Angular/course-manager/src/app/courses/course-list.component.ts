import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _filterBy: string; // tslint:disable-line: variable-name
  _courses: Course[] = []; // tslint:disable-line: variable-name

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error: ', err)
    });

  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Course Id:' + courseId + ' Excluido com sucesso!');
        this.retrieveAll();
      },
      error: err => console.log('Error: ', err)
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses
      .filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}