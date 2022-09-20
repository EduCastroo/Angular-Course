import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Eduardo mendonça de castro lima'
  imgURL = 'https://picsum.photos/id/237/500/500'
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    sabor: ['pepperoni', 'bacon'],
    tamanho: 'grande'
  }
  blueClass = false
  fontSize = 16

  getName(){
    return this.name
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event)
  }
}
