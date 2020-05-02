import { Component } from '@angular/core';
import { lorem } from 'faker/locale/en_US';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {
  randomText = lorem.sentence(4);
  enteredText = '';

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending'
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

  onInput(value: string) {
    this.enteredText = value;
  }
}
