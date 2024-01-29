import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit 
{
  loginData={
    userName:'kartikpawar301@gmail.com',
    password:'Kartik@123',
  };

  constructor(private snack:MatSnackBar, private router:Router)
  {

  }

  ngOnInit(): void {

  }

  formSubmit() {
    console.log('Login Button Clicked')

    if(this.loginData.userName && this.loginData.password){

      this.router.navigate(['/dashboard'])
    }

    if(this.loginData.userName.trim()=='' || this.loginData.userName==null)
    {
      this.snack.open('Username is required !!', '',{
        duration:3000,
      });
      return;
    } 

    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this.snack.open('Password is required !!', '',{
        duration:3000,
      });
      return;
    }
  }
}
