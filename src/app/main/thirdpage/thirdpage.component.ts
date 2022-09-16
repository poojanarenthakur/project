import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit {

  job_id = '';
  newtask: FormGroup;
  constructor(private rest: RestService, private route: ActivatedRoute, private router: Router) {
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
    this.route.params.subscribe(params => {
      this.job_id = params['id'];
      this.rest.getjob(this.job_id).subscribe(resp => {
        console.log(resp);
        this.newtask.patchValue(resp);
      }, err => console.log);
    })
  }

  update() {
    this.rest.updatejob(this.job_id, this.newtask.value).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/jobs'])
    }, err => {
      console.log(err);
    });
  }

}