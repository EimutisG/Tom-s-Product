import { Injectable } from '@angular/core';
import { IProduct } from '../product';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';



@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:3000/products';
    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
       .do (data => console.log('All:' + JSON.stringify(data)))
    .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
