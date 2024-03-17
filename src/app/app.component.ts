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
  formattedNumber = '';
  constructor(
    private ngxArkamiService: NgxArkamiArabicConverterService
  ) {
    this.form = new FormGroup({
      number: new FormControl(null)
    });

  }

  convertNumberToArabic(): void {
    if (!this.form.value.number) {
      this.formattedNumber = '';
      return;
    }

    const isNumber = parseInt(this.form.value.number);

    if (isNumber) {
      this.formattedNumber = this.ngxArkamiService.convertToArabicWords(this.form.value.number);

    }

    this.formattedNumber;
  }
}
