import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  public mensagem: string;
  public valor: number;
  public link_foto: string;

  public constructor() {
    this.mensagem = 'Olá mundo!';
    this.valor = 0;
    this.link_foto = '/assets/isiflix.jpg';
  }

  ngOnInit(): void {


  }

  public mudarValor() {
    this.valor++;
    this.link_foto = "/assets/images.jpg";
    //console.log(this.valor);
  }

  public enviarDados() {

  }

}
