import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrossOriginHttpClientService {
  private crossOriginProxy = 'https://cors-anywhere.herokuapp.com/';

  constructor(private httpClient: HttpClient) {}

  public getText(url: string): Observable<string> {
    const proxyUrl = this.crossOriginProxy + url;
    return this.httpClient.get(proxyUrl, {
      responseType: 'text'
    });
  }
}
