import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  // Create tasks property using the task array interface and mock task
  tasks: Task[] = TASKS;
}
