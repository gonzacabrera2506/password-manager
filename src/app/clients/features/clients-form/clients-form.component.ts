import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-clients-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './clients-form.component.html',
  styleUrl: './clients-form.component.scss'
})
export default class ClientsFormComponent {
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group({
    name: this._formBuilder.control('', Validators.required),
    remote_desktop: this._formBuilder.control('', Validators.required),
    password: this._formBuilder.control('', Validators.required),
    user_protheus: this._formBuilder.control('', Validators.required),
    password_protheus: this._formBuilder.control('', Validators.required),
    others: this._formBuilder.control('', Validators.required),

  });

  submit(){}
}
