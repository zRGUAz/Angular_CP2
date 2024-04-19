import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  tarefas:Tarefa[] = [
    {id:"tarefa1", titulo:"Tarefa 1", descricao:"Primeira tarefa", dataVencimento:"01/01/2025", qtdIntegrantes: 10},
    {id:"tarefa2", titulo:"Tarefa 2", descricao:"Segunda tarefa", dataVencimento:"04/08/2024", qtdIntegrantes: 2}
  ];

  adicionar(tarefa:Tarefa) {
    this.tarefas.push(tarefa);

  }

  listar():Tarefa[] {
    return this.tarefas;

  }

  remover(id:string) {
    const tarefa = this.tarefas.find(t => t.id == id);

    if(tarefa) {
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index, 1);
    }
  }
}
