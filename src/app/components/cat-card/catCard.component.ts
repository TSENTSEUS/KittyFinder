import {Component, Input} from "@angular/core";
import { ICat } from "../../models/cat";

@Component({
  selector:'cat-card',
  templateUrl: './catCard.component.html',
  styleUrls:['./catCard.component.scss']
})
export class CatCardComponent {
  @Input() cats: ICat
}
