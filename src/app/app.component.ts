import { Component, OnInit, OnChanges } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Marks app';
  memberId;
  idForm;

  constructor(private appService: AppService, private fb: FormBuilder) {
    this.createForm();
  }

  public test() {
    this.memberId = this.idForm.value.memberId as string;
    console.log(this.memberId);
    const request = {
      ids: [
        this.memberId
      ]
    };

    this.appService.setTag(request);
    this.ngOnChanges();
  }

  private createForm(): void {
    this.idForm = this.fb.group({
      memberId: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    this.idForm.reset({
      memberId: ''
    });
  }
}
