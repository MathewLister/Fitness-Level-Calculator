import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';
import { FitnessLevelCalculator } from '../Services/FitnessLevelCalculator';

@Component({
  selector: 'client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css'],
})

export class ClientInfoComponent implements OnInit {

  client = new Client();

  constructor(private fitnessLevelCalculatorService:FitnessLevelCalculator) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.client.Height)
    this.fitnessLevelCalculatorService.generateReport(this.client);
  }

}
