import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UpdateService } from 'src/app/services/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private UpdateService: UpdateService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  receberDados(){
    console.log(this.userModel)
    
    //Enviar dados para a API
    this.UpdateService.update(this.userModel).subscribe((response) => {
      console.log("response:", response)
      console.log("O status code é:", response.status)
      console.log("O token code é:", response.body.accessToken)
      
      this.mensagem = "Usuário " + response.body.user.nome +" atualizado com sucesso!"
      console.log(this.mensagem)
      
    }, (responseErro) => {
      console.log("erro:", responseErro)

      this.mensagem = responseErro.error;
      console.log(this.mensagem)
    })
  }
}


