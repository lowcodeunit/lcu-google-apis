import { Component, Injector } from '@angular/core';
import { ForgeGenericSolution, ISolutionControl } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-lcu-sln-google-apis-overview',
	templateUrl: './lcu-sln-google-apis-overview.component.html',
	styleUrls: ['./lcu-sln-google-apis-overview.component.scss']
})
export class ForgeLcuSlnGoogleApisSolutionOverview extends ForgeGenericSolution
	implements ISolutionControl {
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
