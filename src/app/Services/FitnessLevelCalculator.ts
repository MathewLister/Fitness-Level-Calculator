import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../Models/client';
import { ClientReport } from '../Models/clientReport';

@Injectable({
  providedIn: 'root',
})
export class FitnessLevelCalculator {
    private client = new Client();
    private clientReport = new ClientReport();
    constructor(private router : Router) { }

    public generateReport(client: Client) {
        this.calculateFitnessLevel(client);
        this.router.navigateByUrl('/client-report');
    }
    public calculateFitnessLevel(client: Client): ClientReport {
        this.client = client;
        if (this.client.Height && this.client.Weight) {
            this.clientReport.BMI = this.calculateBMI(this.client.Weight, this.client.Height);
          }
          return this.clientReport;
    }

    public calculateBMI(weight: number, height: number): number {
        return Number(((weight/Math.pow(height, 2)) * 703).toFixed(2));
    }

    public getClientReport(): ClientReport {
        return this.clientReport;
    }

}

