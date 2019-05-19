import { Router } from '@angular/router';
import { State, Action, StateContext, Actions, ofAction } from '@ngxs/store';
import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';

export class Navigate {
  static readonly type = '[router] NAVIGATE';
  constructor(public payload: string) {} // payload is path we want to navigate to.
}

@State<string>({
  name: 'router',
  defaults: '',
})
export class RouterState {
  constructor(private router: Router) {}

  // not only limited to observables.
  // Angular router can return a promise.
  // one can navigate to the new path and then update the state afterwards.
  @Action(Navigate)
  async changeRoute(context: StateContext<string>, action: Navigate) {
    const path = action.payload;
    await this.router.navigate([path]);
    context.setState( path );
  }
}

// one can still listen to a stream of actions
// this is how it can be done in ngrx.
// @Injectable()
// export class RouteHandler {
//   constructor(private router: Router, private actions$: Actions) {
//     this.actions$
//       .pipe(ofAction(Navigate))
//       .subscribe(({ payload }) => this.router.navigate([payload]));
//   }
// }
