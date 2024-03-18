import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxArkamiArabicConverterService } from 'ngx-arkami-arabic-converter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  title = 'Arkami Arabic Converter';
  arabicTextRepresentation = '';
  inputNumber = '';
  constructor(
    private ngxArkamiService: NgxArkamiArabicConverterService
  ) {
    this.form = new FormGroup({
      number: new FormControl(null)
    });

  }

  // if you want to use the service and pass value to your html
  convertNumberToArabicWords(): void {
    if (!this.form.value.number) {
      this.arabicTextRepresentation = '';
      return;
    }

    const isNumber = parseInt(this.form.value.number);
    if (isNumber) {
      this.arabicTextRepresentation = this.ngxArkamiService.convertToArabicWords(this.form.value.number);
    }
  }


  // if you want to use the ngxArkamiArabicConverter component to render the value through the component
  setInputNumber(): void {
    if (!this.form.value.number) {
      this.inputNumber = '';
      return;
    }

    const isNumber = parseInt(this.form.value.number);
    if (isNumber) {
      this.inputNumber = this.form.value.number;
    }
  }
}
