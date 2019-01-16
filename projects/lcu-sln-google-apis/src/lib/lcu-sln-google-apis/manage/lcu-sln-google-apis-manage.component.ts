import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';


@Component({
    selector: 'forge-solution-lcu-sln-google-apis-manage',
    templateUrl: './lcu-sln-google-apis-manage.component.html',
    styleUrls: ['./lcu-sln-google-apis-manage.component.scss']
})
export class ForgeLcuSlnGoogleApisSolutionManage extends ForgeGenericSolution
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
