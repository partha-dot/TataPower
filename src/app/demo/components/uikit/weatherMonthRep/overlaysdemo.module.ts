import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaysDemoComponent } from './overlaysdemo.component';
import { OverlaysDemoRoutingModule } from './overlaysdemo-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FilterService } from 'primeng/api';
import { PickListModule } from 'primeng/picklist';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
	imports: [
		OverlaysDemoRoutingModule,
        CommonModule,
        ReactiveFormsModule,
            FormsModule,
            TableModule,
            RatingModule,
            ButtonModule,
            SliderModule,
            InputTextModule,
            ToggleButtonModule,
            RippleModule,
            MultiSelectModule,
            DropdownModule,
            ProgressBarModule,
            ToastModule,
            DialogModule,
            ToolbarModule,
            SidebarModule,
            ProgressSpinnerModule,
            ConfirmDialogModule,
            CalendarModule,
        PickListModule,
		DropdownModule,
		ConfirmDialogModule,
		CalendarModule
	],
	declarations: [OverlaysDemoComponent]
})
export class OverlaysDemoModule { }
