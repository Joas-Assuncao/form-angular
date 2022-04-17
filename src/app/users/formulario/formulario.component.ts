import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import DataSports from '../shared/DataSports';
import DataStates from '../shared/DataStates';
import { User } from '../shared/user';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  formUser: FormGroup;
  estados: string[];
  esportes: Array<any>;
  dataStorage: Object;

  public checkbox: any = '';

  constructor() {
    this.estados = DataStates;
    this.esportes = DataSports;
  }

  onChangeEsporte(event: any) {
    const id = event.target.value;
    const isChecked = event.target.checked;

    this.esportes = this.esportes.map(obj => {
      if(obj.id === Number(id)) {
        obj.checked = isChecked;
        return obj;
      }
      return obj;
    })
  }

  ngOnInit(): void {
    this.createForm(new User());
    this.isDisabled();
  }

  isDisabled(booleanParam: boolean = false): boolean {
    if(!localStorage.getItem('nome')) {
      return booleanParam;
    }
    return !booleanParam;
  }

  createForm(user: User) {
    this.formUser = new FormGroup({
      nome: new FormControl(localStorage.getItem('nome') || user.nome),
      senha: new FormControl(localStorage.getItem('senha') || user.senha),
      dataNascimento: new FormControl(localStorage.getItem('dataNascimento') || user.dataNascimento),
      email: new FormControl(localStorage.getItem('email') || user.email),
      idade: new FormControl(localStorage.getItem('idade') || user.idade),
      estado: new FormControl(localStorage.getItem('estado') || this.estados),
      esporte: new FormControl(this.esportes),
    })
  }

  onSubmit(): any {
    const user = this.formUser.value;

    if(!user.nome || !user.estado || !user.dataNascimento || !user.email || !user.senha || !user.idade) {
      return Swal.fire('Verifique os campos', 'Todos os campos precisam estar preenchidos!', 'error');
    }

    // console.log(user.esporte);
    const esporteEscolhido = user.esporte.find((esporteAtual: any) => {
      if(esporteAtual.checked) {
        return esporteAtual.name;
      }
    });

    localStorage.setItem('nome', user.nome);
    localStorage.setItem('senha', user.senha);
    localStorage.setItem('estado', user.estado);
    localStorage.setItem('dataNascimento', user.dataNascimento);
    localStorage.setItem('email', user.email);
    localStorage.setItem('idade', user.idade);
    localStorage.setItem('esportes', esporteEscolhido);
  }

}
