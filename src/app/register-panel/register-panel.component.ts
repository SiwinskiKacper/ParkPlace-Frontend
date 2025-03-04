import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css']
})
export class RegisterPanelComponent {
  username: string = '';
  password: string = '';
  imie: string = '';
  nazwisko: string = '';
  email: string = '';
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/reservation']);
  }
}
