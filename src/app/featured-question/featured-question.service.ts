import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeaturedQuestionService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    // https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow
  }

  public getAllFeaturedQuestions(): Observable<any> {
    const url = `${this.baseUrl}/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow`;
    return this.http.get(url);
  }
}
