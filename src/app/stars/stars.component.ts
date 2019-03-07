import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked = new EventEmitter<string>();
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick(): void {
    console.log(`The rating ${this.rating} was clicked!`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
