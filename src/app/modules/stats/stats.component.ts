import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { FabService } from 'src/app/fab.service';

@Component({
  selector: 'sb-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit {
  lineChartData: ChartDataSets[] = [{ data: [65, 59, 80, 81, 72, 66, 64], label: 'Weight' }];
  lineChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    annotation: {}
  };
  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0, 157, 224, 0.2)',
      borderColor: 'rgba(0, 157, 224, 1)',
      pointBackgroundColor: 'rgba(0, 157, 224, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 157, 224, 0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] }
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [{ data: [2, 5, 7, 6, 3, 2, 0], label: 'Disease' }];
  constructor(fab: FabService) {
    fab.show();
    fab.update([
      { title: 'Weight', icon: 'add', action: (ev: Event) => console.log(ev) },
      { title: 'Disease', icon: 'add', action: (ev: Event) => console.log(ev) }
    ]);
  }

  ngOnInit() {}

  public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }
}
