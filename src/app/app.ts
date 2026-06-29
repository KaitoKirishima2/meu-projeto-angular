import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuBotao } from "./meu-botao/meu-botao";
import { BotaoFlat } from './botao-flat/botao-flat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuBotao,BotaoFlat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  protected readonly title = signal('meu-projeto-angular');
}
