import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() public questions: any;
  @Input() public title: string;
  @Output() public userNameClicked: EventEmitter<number>;

  constructor() {
    this.userNameClicked = new EventEmitter();
   }

  ngOnInit() {
  }

  public handleUserNameClick(userId: number) {
    this.userNameClicked.next(userId);
  }

}
