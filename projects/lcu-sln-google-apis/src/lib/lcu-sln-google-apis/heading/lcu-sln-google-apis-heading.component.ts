import { Component, Injector } from '@angular/core';
import { ForgeGenericSolution, ISolutionControl } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-lcu-sln-google-apis-heading',
	templateUrl: './lcu-sln-google-apis-heading.component.html',
	styleUrls: ['./lcu-sln-google-apis-heading.component.scss']
})
export class ForgeLcuSlnGoogleApisSolutionHeading extends ForgeGenericSolution
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
