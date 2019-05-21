import { map, catchError } from 'rxjs/operators';
import { Adapter } from './../core/adapter';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseObject } from './../models/BaseObject';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Response } from '../models/Response';

export interface QueryOptions {
  toQueryString: () => string;
}

@Injectable({
  providedIn: 'root'
})
export class ResourceService<T extends BaseObject> {
  private authToken = '';

  constructor(
      private store: Store,
      private httpClient: HttpClient,
      private url: string,
      private endpoint: string,
      private objectAdapter: Adapter<T>) {
        console.log('*** ngxsStore ', store);
        this.authToken = store.selectSnapshot(state => state.auth);
        console.log('*** this.authState ', this.authToken);
      }

  public create(item: Partial<T>): Observable<Response<T>> {
    //this.serializer.toJson(item)
    const body = item;
    const options = {
      headers: this.getDefaultHeaders()
    };

    return this.httpClient
      .post<Response<T>>(`${this.url}/${this.endpoint}`, body, options)
      .pipe(
        map(
          (response: Response<T>) => {
            const adaptedEntity = this.convertDataEntity(response.data);

            const newResponse = {
              data: adaptedEntity,
              errors: response.errors
            };

            return newResponse;
          },
          catchError(error => of(null))
        )
      );
  }

  public update(item: T): Observable<Response<T[]>> {
    const body = item;
    const options = {
      headers: this.getDefaultHeaders()
    };
    return this.httpClient
      .put<Response<T[]>>(`${this.url}/${this.endpoint}/${item.id}`, body, options)
      .pipe(
        map(
          (response: Response<T[]>) => {
            const adaptedData = this.convertDataArray(response.data);

            const newResponse = {
              data: adaptedData,
              errors: response.errors
            };

            return newResponse;
          },
          catchError(error => of(null))
        )
      );
  }

  public patch(item: Partial<T>): Observable<Response<T[]>> {
    const body = item;
    const options = {
      headers: this.getDefaultHeaders()
    };

    return this.httpClient
      .patch<Response<T[]>>(`${this.url}/${this.endpoint}/${item.id}`, body, options)
      .pipe(
        map(
          (response: Response<T[]>) => {
            const adaptedData = this.convertDataArray(response.data);

            const newResponse = {
              data: adaptedData,
              errors: response.errors
            };

            return newResponse;
          },
          catchError(error => of(null))
        )
      );
  }

  read(id: number): Observable<Response<T[]>> {
    const options = {
      headers: this.getDefaultHeaders()
    };

    return this.httpClient
      .get<Response<T[]>>(`${this.url}/${this.endpoint}/${id}`, options)
      .pipe(
        map(
          (response: Response<T[]>) => {
            const adaptedData = this.convertDataArray(response.data);

            const newResponse = {
              data: adaptedData,
              errors: response.errors
            };

            return newResponse;
          },
          catchError(error => of(null))
        )
      );
  }

  list(queryOptions?: QueryOptions): Observable<Response<T[]>> {
    const options = {
      headers: this.getDefaultHeaders()
    };

    return this.httpClient
      // .get<Response<T[]>>(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`, options)
      .get<Response<T[]>>(`${this.url}/${this.endpoint}`, options)
      .pipe(
        map(
          (response: Response<T[]>) => {
            const adaptedData = this.convertDataArray(response.data);

            const newResponse = {
              data: adaptedData,
              errors: response.errors
            };

            return newResponse;
          },
          catchError(error => of(null))
        )
      );
  }

  delete(id: number) {
    const options = {
      headers: this.getDefaultHeaders()
    };

    return this.httpClient
      .delete<Response<T>>(`${this.url}/${this.endpoint}/${id}`, options)
      .pipe(
        map(
          (response: Response<T>) => {
            const adaptedData = this.convertDataEntity(response.data);

            const newResponse = {
              data: adaptedData,
              errors: response.errors
            };

            return newResponse;
          },
          catchError(error => of(null))
        )
      );
  }

  private getDefaultHeaders() {
    const token = this.store.selectSnapshot(state => state.auth.authToken);
    console.log('*** gettingAuthToken ', token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  private convertDataArray(jsonData: any[]): T[] {
    return jsonData.map((element: any) => {
      return this.objectAdapter.adapt(element);
    });
  }

  private convertDataEntity(jsonEntity: any): T {
    return this.objectAdapter.adapt(jsonEntity);
  }
}
