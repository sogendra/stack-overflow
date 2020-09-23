import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeaturedQuestionService } from './featured-question.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-question',
  templateUrl: './featured-question.component.html',
  styleUrls: ['./featured-question.component.css']
})
export class FeaturedQuestionComponent implements OnInit, OnDestroy {

  public questions: any;
  private destroy: Subject<void>;

  constructor(private questionService: FeaturedQuestionService, private router: Router) {
    this.destroy = new Subject();
  }

  ngOnInit() {
    this.getAllFeaturedQuestions();
  }


  public getAllFeaturedQuestions(): void {
    this.questionService.getAllFeaturedQuestions().pipe(takeUntil(this.destroy)).subscribe(res => {
      this.questions = res.items;
    });
  }

  public navigateToProfile(userId: number): void {
    this.router.navigate(['/profile', userId]);
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

}
