import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientReport } from '../Models/clientReport';
import { FitnessLevelCalculator } from '../Services/FitnessLevelCalculator';

@Component({
  selector: 'app-client-report',
  templateUrl: './client-report.component.html',
  styleUrls: ['./client-report.component.css']
})
export class ClientReportComponent implements OnInit {

  clientReport = new ClientReport();
  
  constructor(private fitnessLevelCalculatorService:FitnessLevelCalculator) { }

  ngOnInit(): void {
    //this.clientReport = something?
    this.clientReport = this.fitnessLevelCalculatorService.getClientReport();
  }
}
