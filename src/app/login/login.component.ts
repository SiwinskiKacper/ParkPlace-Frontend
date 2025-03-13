import { HttpClient } from '@angular/common/http';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IconType } from '@angular/material/icon/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  loginObj: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router,
              private http: HttpClient) {}

  onLogin() {
    this.http.post("https://localhost:7083/api/Parking/login",this.loginObj).subscribe((res:any)=>{
      localStorage.setItem("angular19user",res.data.UserId)
      this.router.navigate(["/dashboard"])
    }, error => {
      alert("Wrong credentials")
    })
  }

}