import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject, forkJoin } from 'rxjs';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private userId: number;
  private destroy: Subject<void>;
  public userDetail: any;
  public userTags: any;
  public topQuestions: any;

  constructor(private routes: ActivatedRoute, private userProfileService: UserProfileService) {
    this.destroy = new Subject();
  }

  ngOnInit() {
    this.fetchUserIdFromRoute();
  }

  public fetchUserIdFromRoute(): void {
    this.routes.paramMap.pipe(takeUntil(this.destroy)).subscribe(params => {
      if (params.has('userId')) {
        this.userId = Number(params.get('userId'));
        this.getUserProfileData();
      }
    });
  }

  public getUserProfileData(): void {

    const UserDetailsByUserId = this.userProfileService.getUserDetailsByUserId(this.userId);
    const TagsByUserId = this.userProfileService.getTagsByUserId(this.userId);
    const TopQuestionsByUserId = this.userProfileService.getTopQuestionsByUserId(this.userId);

    forkJoin([UserDetailsByUserId, TagsByUserId, TopQuestionsByUserId]).pipe(takeUntil(this.destroy)).subscribe(responses => {
      this.userDetail = responses[0].items[0];
      this.userTags = responses[1].items;
      this.topQuestions = responses[2].items;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }
}
