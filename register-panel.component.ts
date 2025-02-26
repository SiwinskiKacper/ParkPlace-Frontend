import { Component } from '@angular/core';

@Component({
  selector: 'app-register-panel',
  imports: [],
  templateUrl: './register-panel.component.html',
  styleUrl: './register-panel.component.css'
})
export class RegisterPanelComponent {
  registrationVisible = true;
  submmitRegistration() {
    this.registrationVisible = false;
    console.log("Rejestracja sie powiodła!"); 
   }
}
