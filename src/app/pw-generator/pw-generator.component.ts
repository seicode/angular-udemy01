import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw-generator',
  templateUrl: './pw-generator.component.html',
  styleUrls: ['./pw-generator.component.css']
})
export class PwGeneratorComponent implements OnInit {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  ngOnInit() {
  }

  onButtonClick() {
    const num = '1234';
    const letters = 'zxcv';
    const symbols = '!"#$';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += num;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parseValue = parseInt(value);

    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
