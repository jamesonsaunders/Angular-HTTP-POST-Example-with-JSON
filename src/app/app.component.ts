import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postData = {
    test: 'my content',
  };
  url = `http://httpbin.org/post`;
  json;

  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data);
      console.log(data.json.test);
      this.json = JSON.stringify(data.json);
    });
  }
}
