import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  newtask: FormGroup;
  // updatetask: FormGroup;

  constructor(private rest: RestService, private router: Router) {
    this.newtask = new FormGroup({
      job_number: new FormControl('', Validators.required),
      job_title: new FormControl('', Validators.required),
      job_start_date: new FormControl('', Validators.required),
      job_close_date: new FormControl('', Validators.required),
      experience_required: new FormControl('', Validators.required),
      number_of_openings: new FormControl('', Validators.required),
      job_notes: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
  }

  add() {
    if (this.newtask.valid) {
      this.rest.postjob(this.newtask.value).subscribe(resp => {
        this.router.navigate(['/jobs']);
      });
    }
  }

}
