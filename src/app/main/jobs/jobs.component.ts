import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getjobs();
  }


  getjobs() {
    this.rest.getalljobs().subscribe((resp: any) => {
      this.jobs = resp;
    }, err => console.log)
  }

  deletejob(id: any) {
    if (confirm("Are You Sure? ")) {
      this.rest.deletejob(id).subscribe(resp => {
        console.log(resp);
        this.getjobs()
      }, err => {
        console.log(err);
      })
    }
  }

}
