import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ICat } from "../models/cat";

@Injectable({
  providedIn:'root'
})

export class CatsService {

  constructor(private http: HttpClient) {

  }

  getData(): Observable<ICat[]>{
    return this.http.get<ICat[]>('https://api.thecatapi.com/v1/breeds')
  }

}
