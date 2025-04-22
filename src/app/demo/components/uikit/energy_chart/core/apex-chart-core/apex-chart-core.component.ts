import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexStroke, ApexMarkers, ApexYAxis, ApexGrid, ApexTitleSubtitle, ApexLegend, ApexTooltip, ApexFill, ApexResponsive } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  toolTip: ApexTooltip;
  fill: ApexFill;
  responsive?: ApexResponsive[];
};

@Component({
  selector: 'apex-chart-core',
  templateUrl: './apex-chart-core.component.html',
  styleUrls: ['./apex-chart-core.component.scss']
})
export class ApexChartCoreComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  
  @Input() chartDT: any[] = [];

  series: ApexAxisChartSeries = [];
  chart_dtls: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  toolTip: ApexTooltip;
  fill: ApexFill;
  responsive: ApexResponsive[];

  constructor() {}

  ngOnInit(): void {
    this.initChartData();
    this.updateChartSeries();
  }

  ngOnChanges(): void {
    this.updateChartSeries();
  }

  private updateChartSeries(): void {
    if (!this.chartDT || this.chartDT.length === 0) return;

    const firstItem = this.chartDT[0];
    if ('ac_vol1' in firstItem) {
      this.series = [
        { name: 'AC Phase 1', data: this.chartDT.map(d => [new Date(d.date_time).getTime(), d.ac_vol1]) },
        { name: 'AC Phase 2', data: this.chartDT.map(d => [new Date(d.date_time).getTime(), d.ac_vol2]) },
        { name: 'AC Phase 3', data: this.chartDT.map(d => [new Date(d.date_time).getTime(), d.ac_vol3]) }
      ];
    } else if ('dc_vol1' in firstItem) {
      this.series = [
        { name: 'DC Phase 1', data: this.chartDT.map(d => [new Date(d.date_time).getTime(), d.dc_vol1]) },
        { name: 'DC Phase 2', data: this.chartDT.map(d => [new Date(d.date_time).getTime(), d.dc_vol2]) },
        { name: 'DC Phase 3', data: this.chartDT.map(d => [new Date(d.date_time).getTime(), d.dc_vol3]) }
      ];
    }
  }

  private initChartData(): void {
    this.chart_dtls = {
      width: '100%',
      type: "line",
      height: 350,
      toolbar: { show: false }
    };

    this.dataLabels = { enabled: false };

    this.title = { text: "Voltage Chart", align: "center" };

    this.yaxis = {
      title: {
        text: "Voltage (V)",
        style: { fontSize: '12px', fontWeight: 600 }
      },
      labels: { style: { fontSize: '10px', colors: 'gray' } }
    };

    this.xaxis = {
      type: "datetime",
      labels: {
        format: 'HH:mm',
        datetimeUTC: false,
        style: { fontSize: '10px', colors: 'gray' }
      },
      tooltip: { enabled: true }
    };

    this.stroke = { curve: "smooth", width: 2 };

    this.markers = { size: 4 };

    this.legend = {
      position: 'bottom',
      fontSize: '12px',
      fontWeight: 600,
      labels: { useSeriesColors: true }
    };

    this.toolTip = {
      x: { format: 'dd/MM/yyyy HH:mm' }
    };

    this.fill = { type: 'solid' };
  }
}
