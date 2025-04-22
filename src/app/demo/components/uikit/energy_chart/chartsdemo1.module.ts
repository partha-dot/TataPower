import { CUSTOM_ELEMENTS_SCHEMA, inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsDemo1RoutingModule } from './chartsdemo1-routing.module';

// import { ChartContentHolderComponent } from './core/chart-content-holder/chart-content-holder.component';
// import { FilterFormComponent } from './core/filter-form/filter-form.component';
// import { DateCalendarComponent } from './core/date-calendar/date-calendar.component';
// import { ApexChartCoreComponent } from './core/apex-chart-core/apex-chart-core.component';
@NgModule({
	imports: [
		CommonModule,
		ChartsDemo1RoutingModule,
		
	],
	// declarations: [ChartsDemo1Component, ChartContentHolderComponent, FilterFormComponent, DateCalendarComponent, ApexChartCoreComponent],
	
})
export class ChartsDemo1Module { }
