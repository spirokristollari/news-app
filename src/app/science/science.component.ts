import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  sciencenewsDisplay: any = [];

  ngOnInit(): void {
    this._services.scienceNews().subscribe((result)=>{
      this.sciencenewsDisplay = result.articles;
    })
  
  }

}
