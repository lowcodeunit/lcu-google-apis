import { NgModule } from '@angular/core';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseSolutionModule } from '@lcu/solutions';
import { NgxMarkdownDocsModule } from '@lowcodeunit/ngx-markdown-docs';
import { ForgeLcuSlnGoogleApisSolutionManage } from './manage/lcu-sln-google-apis-manage.component';
import { ForgeLcuSlnGoogleApisSolutionDocumentation } from './documentation/lcu-sln-google-apis-documentation.component';
import { ForgeLcuSlnGoogleApisSolutionHeading } from './heading/lcu-sln-google-apis-heading.component';
import { ForgeLcuSlnGoogleApisSolutionMarketplace } from './marketplace/lcu-sln-google-apis-marketplace.component';
import { ForgeLcuSlnGoogleApisSolutionOverview } from './overview/lcu-sln-google-apis-overview.component';


export class ForgeLcuSlnGoogleApisSolutionDisplayModule extends BaseSolutionModule {
	public Documentation() {
		return ForgeLcuSlnGoogleApisSolutionDocumentation;
	}

	public Heading() {
		return ForgeLcuSlnGoogleApisSolutionHeading;
	}

	public Manage() {
		return ForgeLcuSlnGoogleApisSolutionManage;
	}

	public Marketplace() {
		return ForgeLcuSlnGoogleApisSolutionMarketplace;
	}

	public Overview() { 
		return ForgeLcuSlnGoogleApisSolutionOverview;
	}
}

var comps = [
	ForgeLcuSlnGoogleApisSolutionDocumentation,
	ForgeLcuSlnGoogleApisSolutionHeading,
	ForgeLcuSlnGoogleApisSolutionManage,
	ForgeLcuSlnGoogleApisSolutionMarketplace,
	ForgeLcuSlnGoogleApisSolutionOverview,
];

@NgModule({
	imports: [
		FathymSharedModule,
		NgxMarkdownDocsModule,
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
export class ForgeLcuSlnGoogleApisSolutionModule { 
}
