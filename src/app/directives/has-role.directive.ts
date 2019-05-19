import { OnDestroy, OnInit, Input, ViewContainerRef, TemplateRef, Directive } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  @Input()
  public appHasRole: string;

  @Select(state => state.account.roles) roles$: Observable<string[]>;

  stopSource = new BehaviorSubject<boolean>(false);
  // stop$ = this.stopSource.asObservable();
  stop$ = new Subject();

  isVisible = false;

  subscription: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {

  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.subscription = this.roles$
      // .pipe(takeUntil(this.stop$)
      .subscribe((roles) => {
        // If the user doesn't ahve any roles,
        // we clear the viewContainerRef
        if (!roles) {
          this.viewContainerRef.clear();
        }

        /**
         * If the user has the role needed
         * render this component we can add it
         */
        if (roles.includes(this.appHasRole)) {
          /**
           * We update the isVisible property and add the templateRef
           * to the view using the createEmbeddedView method
           * of the viewContainerRef
           */
          if (!this.isVisible) {
            this.isVisible = true;
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }
        } else {
          /**
           * if the user doesn't not have the role,
           * we update the isVisible property and
           * clear the contents of the viewContainerRef
           */
          this.isVisible = false;
          this.viewContainerRef.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
