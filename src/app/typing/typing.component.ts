import { Component } from '@angular/core';
import * as faker from 'faker/locale/en';

@Component({
  selector: 'typing-root',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {
  randomText = faker.lorem.sentence(4);
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
