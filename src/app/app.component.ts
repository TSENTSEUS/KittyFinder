import {Component, OnInit} from '@angular/core';
import {ICat} from "./models/cat";
import {CatsService} from "./services/cats.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'catsFinder';
  amount = [5, 10, 15, 25, 50];
  cats: ICat[] = [];
  catFiltered: ICat[] = [];
  selectedAmount = this.amount[1];

  constructor(private catsService: CatsService) {}
  ngOnInit(): void {
    this.catsService.getData().subscribe(cats => {
        this.cats = cats
        this.catFiltered = cats
      })

  }

  selected($event:any){
    this.selectedAmount = $event.value
  }
  onChange($event:any){
    this.catFiltered = this.cats.filter((cat) => {
      if($event.value.toLowerCase() == 'all') return cat
      return cat.name.toLowerCase() == $event.value.toLowerCase();
    })
  }
}
