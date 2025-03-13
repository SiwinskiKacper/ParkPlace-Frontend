
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(user: { firstName: string; lastName: string; username: string; email: string; password: string; confirmPassword: string; }) {
    throw new Error('Method not implemented.');
  }

}
