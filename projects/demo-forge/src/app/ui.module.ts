import { ModuleWithProviders, NgModule } from "@angular/core";
import { PageViewModule } from "@lcu/daf-ui";
import { FathymSharedModule } from "@lcu/hosting";
import { IBuildersService, ISolutionsService } from "@lcu/elements";
import { DemoForgeBuildersService } from "./svc/builders.service";
import { DemoForgeSolutionsService } from "./svc/solutions.service";

var thirdPartyModules = [
];

var thirdPartyServices = [];

var fathymModules = [
  PageViewModule,
];

var fathymServices = [
  { provide: IBuildersService, useClass: DemoForgeBuildersService },
  { provide: ISolutionsService, useClass: DemoForgeSolutionsService }
];

var localModules: Array<any> = [];

var localServices = [];

var modules = [FathymSharedModule, ...thirdPartyModules, ...localModules, ...fathymModules];

var services = [...thirdPartyServices, ...localServices, ...fathymServices];

var comps = [];

@NgModule({
  declarations: [...comps],
  imports: [...modules],
  exports: [...comps, ...modules],
  entryComponents: [...comps],
  providers: []
})
export class UIModule {
  //	Constructors
  constructor() {
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModule,
      providers: [...services]
    };
  }
}
