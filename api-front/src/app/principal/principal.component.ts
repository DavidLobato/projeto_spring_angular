import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  cliente = new Cliente();

  //variável para visibilidade dos botões
  btnCadastrar: boolean = true;

  //variável para visibilidade da tabela
  tabela: boolean = true;

  //JSON de clientes
  clientes: Cliente[] = [];

  constructor(private servico: ClienteService) { }

  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);
  }

  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
      .subscribe(retorno => {
        this.clientes.push(retorno);


        this.cliente = new Cliente();

        alert("Cliente cadastrado com sucesso.");
      });
  }

  //Método para editar clientes
  editar(): void {
    this.servico.editar(this.cliente)
      .subscribe(retorno => {

        //Obter a posição do vetor que está o cliente
        let posicao = this.clientes.findIndex(obj => {
          return obj.id == retorno.id;
        });

        //Alterar os dados do cliente
        this.clientes[posicao] = retorno;

        //Limpa formulário 
        this.cliente = new Cliente();

        //visibilidade dos botões
        this.btnCadastrar = true;

        //visibilidade da tabela
        this.tabela = true;

        alert("Cliente alterado com sucesso.");
      });
  }

  //Método para excluir clientes
  remover(): void {
    this.servico.remover(this.cliente.id)
      .subscribe(retorno => {

        //Obter a posição do vetor que está o cliente
        let posicao = this.clientes.findIndex(obj => {
          return obj.id == this.cliente.id;
        });

        //Remover cliente do vetor
        this.clientes.splice(posicao, 1);

        //Limpa formulário 
        this.cliente = new Cliente();

        //visibilidade dos botões
        this.btnCadastrar = true;

        //visibilidade da tabela
        this.tabela = true;

        alert("Cliente removido com sucesso.");
      });
  }

  //Metodo para selecionar um cliente especifico
  selecionarCliente(posicao: number): void {
    this.cliente = this.clientes[posicao];
    this.btnCadastrar = false;
    this.tabela = false;
  }

  //Método para cancelar
  cancelar(): void {
    this.cliente = new Cliente();

    //visibilidade dos botões
    this.btnCadastrar = true;

    //visibilidade da tabela
    this.tabela = true;

  }

  ngOnInit() {
    this.selecionar();
  }

}
