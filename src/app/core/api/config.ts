import {Injectable} from '@angular/core';

@Injectable()
export class Config {
  readonly url: string = 'http://jshouse.afreestylers.com/api/v1/';
  lang: string = 'en-En';
  token: Token = {
    refresh: '',
    access: ''
  };
  readonly key: string = '6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6'
}

export interface Token {
  refresh: string;
  access: string;
}

export enum ContentType {
  APP_X_WWW_FROM_URLENCODE = <any> 'application/x-www-form-urlencoded',
  APP_JSON = <any> 'application/json'
}

export class ApiService {
  subUrl: string;
}
