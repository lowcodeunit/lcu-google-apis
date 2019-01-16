import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig } from '../lcu-el-google-apis-timezone.core';

@Component({
	selector: 'forge-lcu-el-google-apis-timezone-render',
	templateUrl: './lcu-el-google-apis-timezone-render.component.html',
	styleUrls: ['./lcu-el-google-apis-timezone-render.component.scss']
})
export class ForgeLcuElGoogleApisTimezoneRenderComponent
	extends ForgeGenericControl<ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig>
	implements IControlRender<ForgeLcuElGoogleApisTimezoneDetails, ForgeLcuElGoogleApisTimezoneConfig> {
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
