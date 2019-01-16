import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig } from '../lcu-el-google-apis-timezone.core';

@Component({
	selector: 'forge-lcu-el-google-apis-timezone-marketplace',
	templateUrl: './lcu-el-google-apis-timezone-marketplace.component.html',
	styleUrls: ['./lcu-el-google-apis-timezone-marketplace.component.scss']
})
export class ForgeLcuElGoogleApisTimezoneMarketplaceComponent
	extends ForgeGenericControl<ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig>
	implements IControlMarketplace<ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
