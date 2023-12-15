import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  joke: string ='';

  constructor(private apiService: APIService) {}

  getChuck() {
    this.apiService.getJoke().subscribe((response: any) => {
      this.joke = response.value;
      console.log(response);
    }, (error: any) => {
      alert(error);
    });
  }

  ngOnInit(): void {
    this.getChuck(); 
  }

  getJokeStyle(): any {
    return {
        'font-size': this.joke && this.joke.length > 100 ? '16px' : '24px'
    };
}
}

