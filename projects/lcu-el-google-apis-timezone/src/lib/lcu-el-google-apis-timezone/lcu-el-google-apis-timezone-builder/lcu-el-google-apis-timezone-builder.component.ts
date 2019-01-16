import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig } from '../lcu-el-google-apis-timezone.core';

@Component({
	selector: 'forge-lcu-el-google-apis-timezone-builder',
	templateUrl: './lcu-el-google-apis-timezone-builder.component.html',
	styleUrls: ['./lcu-el-google-apis-timezone-builder.component.scss']
})
export class ForgeLcuElGoogleApisTimezoneBuilderComponent
	extends ForgeGenericControl<ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig>
	implements IControlBuilder<ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig> {
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
