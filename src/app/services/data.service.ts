import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jokeSource = new BehaviorSubject({id: null, joke: null});
  jokeContent: any = this.jokeSource.asObservable();

  private updateSource = new BehaviorSubject({id: null, joke: null});
  updatedJoke: any = this.updateSource.asObservable();

  constructor(private http: HttpClient) { }

  getJokes(num: number): Observable<any>{ 
    return this.http.get<any>(`http://api.icndb.com/jokes/random/${num}`);
  }

  setJoke(joke) { 
    this.jokeSource.next(joke);
  }

  updateJoke(joke) { 
    this.updateSource.next(joke);
  }

}
