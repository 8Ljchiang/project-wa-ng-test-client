import { AuthStateModel } from './../ngxs/auth.state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
// @Injectable()
// export class AuthResolver implements Resolve<string> {

//   constructor(
//       private store: Store
//   ) {}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
  //     // take id from snapshot
  //     const id = route.params['id'];
  //     // start with the document list
  //     return this.store.select('')
  //     return this.store.select('auth').pipe(
  //       (state: AuthStateModel) => {
  //         return state.authToken;
  //       }
  //     )
  //       // wait until there is data available
  //       .filter(documents => documents && documents.length > 0)
  //       // then produce the selected document
  //       .mergeMapTo(this.store.select('selectedDocument'));
  // }
// }
