import { Component, Injector } from '@angular/core';
import { ForgeGenericSolution, ISolutionControl } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-lcu-sln-google-apis-marketplace',
	templateUrl: './lcu-sln-google-apis-marketplace.component.html',
	styleUrls: ['./lcu-sln-google-apis-marketplace.component.scss']
})
export class ForgeLcuSlnGoogleApisSolutionMarketplace extends ForgeGenericSolution
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
