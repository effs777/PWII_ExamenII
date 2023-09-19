import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service'; 
import { INasaForDate } from '../interfases/INasaForDate';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  selectedDate: Date = new Date();
  nasaFilterByDate: any;
  
  constructor(private nasaApiService: NasaApiService) { }
  
  ngOnInit(): void {
    this.filterByDate();
  }

  filterByDate() {
    if (this.selectedDate) {
      this.nasaApiService.getNasaForDate(this.selectedDate.toString()).subscribe((data: any) => {
          this.nasaFilterByDate = data;
        });
    }
  }
}