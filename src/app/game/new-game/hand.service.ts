import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//import { Observable } from 'rxjs';

@Injectable()
export class HandService {
  constructor(private http: HttpClient) {}

  createHand() {
    return this.http
      .post("http://localhost:8000/api/v1/hand", { responseType: "json" })
      .toPromise();
  }
}
