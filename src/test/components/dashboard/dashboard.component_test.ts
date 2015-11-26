import { iit, it, ddescribe, describe, expect, inject, beforeEachProviders, } from 'angular2/testing';
//import { injectAsync, fakeAsync, tick } from 'angular2/testing';
import { provide } from 'angular2/angular2';

import DashboardComponent from '../../../app/components/dashboard/dashboard.component';
import GasService from '../../../app/models/gasService';

describe('dashboard component', () => {
  beforeEachProviders(() => [DashboardComponent, GasService]);

    it('should have a predefined list of cars', inject([DashboardComponent], (dashboard: DashboardComponent) => {
      expect(dashboard.cars.length).toBe(2);
    }));
});