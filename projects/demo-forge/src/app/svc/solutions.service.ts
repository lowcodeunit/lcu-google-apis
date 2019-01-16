import { Injectable } from '@angular/core';
import { BaseSolutionsService } from '@lcu/solutions';
import { SolutionModuleConfig } from '@lcu/elements';
import { ForgeLcuSlnGoogleApisSolutionDisplayModule } from '@lowcodeunit/lcu-sln-google-apis';
import { ForgeLcuElGoogleApisTimezoneDisplayModule } from '@lowcodeunit/lcu-el-google-apis-timezone';

@Injectable({
	providedIn: 'root'
})
export class DemoForgeSolutionsService extends BaseSolutionsService {
	//	Fields

	//	Constructor

	//	API Methods

	//	Helpers
	protected initSolutionModules() {
		this.localSolutionModules = [
      {
        Name: 'Solutions',
        Icon: 'fullscreen',
        BaseKey: 'forge-solution',
        Modules: <SolutionModuleConfig[]>[
          {
            Name: 'Google APIs',
            Control: { Base: 'forge-solution', Details: {}, Type: 'google-apis' },
            Solution: ForgeLcuSlnGoogleApisSolutionDisplayModule,
            DisplaySetups: [
              {
                Name: 'Google APIs',
                Icon: 'insert_chart',
                BaseKey: 'google-apis',
                Modules: [
                  {
                    Name: '',
                    Control: { Base: 'google-apis', Details: { Elements: [], Configs: [] }, Type: 'timezone' },
                    Display: ForgeLcuElGoogleApisTimezoneDisplayModule,
                    HideDrag: false,
                    BuilderState: 'Render',
                  },
                ]
              },
            ],
          },
        ],
      },
		];
	}
}
