import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  loginObj: any = {
    login: '',
    password: ''
  }

  constructor(private router: Router,
              private http: HttpClient) {}

  onLogin() {
    //this.http.post<any>("https://localhost:7083/api/Parking/login",this.loginObj).subscribe(res=>{
    //  this.router.navigate(["/dashboard"])
    //}, error => {
    //  alert("Wrong credentials")
    //})

    if (this.loginObj.email == "admin@admin.com" && this.loginObj.password == "12345678") {
      this.router.navigate(["/dashboard"])
    }
    else {
      alert("Wrong credentials")
    }

  }

}