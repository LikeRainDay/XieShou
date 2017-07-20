import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
/**
 * Created by housh on 2017/7/20.
 */


@Injectable()
export class UesrService {
  private userService = 'http://localhost:8080/user/getInfo';
  params: URLSearchParams;

  constructor(private http: Http) {
    this.params = new URLSearchParams();
    this.params.set("id", "0")
    console.debug("当前返回的内容为：" + this.params.toString())
  }


  getUser(): Observable<string> {
    return this.http.get(this.userService, {search: this.params}).map(this.extractData);

  }


  private extractData(res: Response) {
    console.debug("当前返回的内容为：" + res.toString())
    return res.toString() || {};
  }


  // getUser(): Promise<string> {
  //   return Promise.resolve()
  // }

}

