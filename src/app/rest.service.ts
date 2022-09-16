import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = environment.server_url;

  constructor(private http: HttpClient) {
  }
  getalljobs() {
    return this.http.get(this.url + "/jobs");
  }

  getjob(id: any) {
    return this.http.get(this.url + "/jobs/" + id);
  }

  postjob(data: any) {
    return this.http.post(this.url + "/jobs", data);
  }

  updatejob(id: any, data: any) {
    return this.http.put(this.url + "/jobs/" + id, data);
  }

  deletejob(id: any) {
    return this.http.delete(this.url + "/jobs/" + id);
  }
}