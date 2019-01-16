import { NgModule } from '@angular/core';

import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeLcuElGoogleApisTimezoneBuilderComponent } from './lcu-el-google-apis-timezone-builder/lcu-el-google-apis-timezone-builder.component';
import { ForgeLcuElGoogleApisTimezoneMarketplaceComponent } from './lcu-el-google-apis-timezone-marketplace/lcu-el-google-apis-timezone-marketplace.component';
import { ForgeLcuElGoogleApisTimezoneRenderComponent } from './lcu-el-google-apis-timezone-render/lcu-el-google-apis-timezone-render.component';

export class ForgeLcuElGoogleApisTimezoneDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeLcuElGoogleApisTimezoneBuilderComponent;
	}

	public Marketplace() {
		return ForgeLcuElGoogleApisTimezoneMarketplaceComponent;
	}

	public Render() {
		return ForgeLcuElGoogleApisTimezoneRenderComponent;
	}
}

var comps = [
	ForgeLcuElGoogleApisTimezoneBuilderComponent,
	ForgeLcuElGoogleApisTimezoneMarketplaceComponent,
	ForgeLcuElGoogleApisTimezoneRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeLcuElGoogleApisTimezoneModule { }
