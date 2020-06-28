import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  planners = [
    {
      "id": 1,
      "title": "Planner 1",
      "startdate": "2000-03-24",
      "enddate": "2011-04-25",
      "description": "This is the description of the planner"
    },
    {
      "id": 2,
      "title": "Planner 2",
      "startdate": "2000-03-24",
      "enddate": "2011-04-25",
      "description": "This is the description of the planner"
    },
    {
      "id": 3,
      "title": "Planner 3",
      "startdate": "2000-03-24",
      "enddate": "2011-04-25",
      "description": "This is the description of the planner"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
