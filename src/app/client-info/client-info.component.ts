import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';
import { Router } from '@angular/router' ;

@Component({
  selector: 'client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css'],
})

export class ClientInfoComponent implements OnInit {

  client = new Client();

  constructor(private router : Router, /*private get_data:EmployeeService*/) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.client.Height)
    if (this.client.Height && this.client.Weight) {
      alert(this.calculateBMI(this.client.Weight, this.client.Height));
    }
    this.router.navigateByUrl('/client-report');
  }

  public calculateBMI(weight: number, height: number) {
    return ((weight/Math.pow(height, 2)) * 703).toFixed(2);
  }

}
