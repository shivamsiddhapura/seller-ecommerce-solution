import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-application-model-wrapper',
  templateUrl: './application-model-wrapper.component.html',
  styleUrls: ['./application-model-wrapper.component.scss']
})
export class ApplicationModelWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log('..... selectedTabChange, event: ' + event);
  }

}
