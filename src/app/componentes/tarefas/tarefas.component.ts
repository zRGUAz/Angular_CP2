import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})

export class TarefasComponent {

tarefas:Tarefa[] = [];
tarefaForm:FormGroup = new FormGroup({});

  constructor(private tarefaService:TarefaService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataVencimento: ['', Validators.required],
      qtdIntegrantes: ['', Validators.required]
    })
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

  }

  inserir() {
    if(this.tarefaForm.valid) {
      const novaTarefa: Tarefa = {
        titulo: this.tarefaForm.value.titulo,
        descricao: this.tarefaForm.value.descricao,
        dataVencimento: this.tarefaForm.value.dataVencimento,
        qtdIntegrantes: this.tarefaForm.value.qtdIntegrantes,
        id: this.generateRandomString(6)

      }

      this.tarefaForm.reset()
      this.tarefaService.adicionar(novaTarefa)
      alert('Tarefa criada com sucesso!')

    } else {
      alert('Erro! Alguns campos não foram preenchidos corretamente.');
    }

  }

  listar():void {
    this.tarefas = this.tarefaService.listar();

  }

  remover(id:string):void {
    this.tarefaService.remover(id);
    alert('Tarefa excluída com sucesso!');

  }

  ngOnInit():void {
    this.listar();
  }

}
