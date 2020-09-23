import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    // https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow
  }

  public getTopQuestionsByUserId(userId: number): Observable<any> {
    // 'https://api.stackexchange.com/2.2/users/448014/questions?order=desc&sort=activity&site=stackoverflow'
    const url = `${this.baseUrl}/2.2/users/${userId}/questions?order=desc&sort=activity&site=stackoverflow`;
    return this.http.get(url);
  }

  public getUserDetailsByUserId(userId: number): Observable<any> {
    // 'https://api.stackexchange.com/2.2/users/448014?order=desc&sort=reputation&site=stackoverflow'
    const url = `${this.baseUrl}/2.2/users/${userId}?order=desc&sort=reputation&site=stackoverflow`;
    return this.http.get(url);
  }

  public getTagsByUserId(userId: number): Observable<any> {
    // 'https://api.stackexchange.com/2.2/users/448014/tags?order=desc&sort=popular&site=stackoverflow'
    const url = `${this.baseUrl}/2.2/users/${userId}/tags?order=desc&sort=popular&site=stackoverflow`;
    return this.http.get(url);
  }
}
