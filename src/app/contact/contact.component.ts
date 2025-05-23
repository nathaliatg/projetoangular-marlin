import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicione isto para standalone
import { FormsModule } from '@angular/forms'; // Para o formulário

@Component({
  selector: 'app-contact',
  standalone: true, // É uma parte "sozinha" do bolo
  imports: [
    CommonModule, // Para mostrar ou esconder coisas
    FormsModule   // Para o formulário
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = { // Os campos do formulário
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Quando a pessoa clica em "Enviar", isso aparece no lugar do "livro de receitas"
    console.log('Formulário de Contato Enviado:', this.contactForm);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    // Limpa o formulário para a próxima mensagem
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}