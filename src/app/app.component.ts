import { Component , } from '@angular/core';
import {HttpServiceService} from  './http-service.service'
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-overview';

  data: any ;

  constructor(private dataService: HttpServiceService){

    this.dataService.fetchData().subscribe(
      (response) =>{
       console.log("data", response)
       this.data = [response]
      },  
      (error) => {
        console.error(error);
      }
    )
  }
}


