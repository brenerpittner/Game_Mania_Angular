import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  receberDados(){
    console.log(this.userModel)
    
    //Enviar dados para a API
    this.registerService.register(this.userModel).subscribe((response) => {
      console.log("response:", response)
      console.log("O status code é:", response.status)
      console.log("O token code é:", response.body.accessToken)
      
      this.mensagem = "Usuário " + response.body.user.nome +" cadastrado com sucesso!"
      console.log(this.mensagem)
      
    }, (responseErro) => {
      console.log("erro:", responseErro)

      this.mensagem = responseErro.error;
      console.log(this.mensagem)
    })
  }
}


