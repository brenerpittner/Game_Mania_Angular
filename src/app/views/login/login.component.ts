import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  receberDados(){
    console.log(this.userModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*"]

    listaPalavras.forEach(palavra => { 
      if (this.userModel.email?.toLocaleLowerCase().includes(palavra)){
        this.mensagem = "Dados inválidos: "  + palavra
        return                                                              //encerramento de função receberDados() 
      }
    });
    
    //Enviar dados para a API
    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("response:", response)
      console.log("O status code é:", response.status)
      console.log("O token code é:", response.body.accessToken)
      
      //msg para form html
      this.mensagem = "Bem vindo " + response.body.user.nome +" !" 
      console.log(this.mensagem)
      
    }, (responseErro) => {
      console.log("responseErro:", responseErro)
      //msg de erro para tratamento
      //this.mensagem = responseErro.error;
      console.log("responseErro.error:", this.mensagem)

      if(responseErro.error == 'Incorrect password'){
        this.mensagem = "Senha incorreto" 
        console.log(this.mensagem)
      }
      if(responseErro.error == 'Cannot find user'){      
        this.mensagem = "Usuário não encontrado" 
        console.log(this.mensagem)
      }
      if(responseErro.error == 'Email format is invalid'){      
        this.mensagem = "Email digitado errado" 
        console.log(this.mensagem)
      }      
      if(responseErro.error == 'Password is too short'){      
        this.mensagem = "Senha curta" 
        console.log(this.mensagem)
      }
    })
  }
}
