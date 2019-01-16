import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-lcu-sln-google-apis-documentation',
	templateUrl: './lcu-sln-google-apis-documentation.component.html',
	styleUrls: ['./lcu-sln-google-apis-documentation.component.scss']
})
export class ForgeLcuSlnGoogleApisSolutionDocumentation extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties
	public DocsRoot: string;

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
		
		this.DocsRoot = 'https://raw.githubusercontent.com/lowcodeunit/lcu-sln-lcu-sln-google-apis/master/docs/';
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
