import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuthorizationData} from '../../shared/models/api/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Config, ContentType} from '../api/config';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private config : Config){

  }

  readonly subUrl: string = 'auth/login';

  login(data: AuthorizationData){

    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('key', this.config.key);

    return this.http.post(`${this.config.url}${this.subUrl}`, body, {
      headers: {
        "Accept-Language": this.config.lang,
        "Content-Type": ContentType.APP_X_WWW_FROM_URLENCODE.toString()
      }
    })
  }
}
