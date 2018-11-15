import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
base = 0;
altura = 0;
lado = 0;
total = 0;
total1 = 0;
numero = 0;
memo = [];
areaRectangulo(){
  if(this.base>0&&this.altura>0){
  this.total = this.base * this.altura / 2;
  return this.total;
  }
    else{
    alert("error");
    }
}
calcularRectangulo(){
this.total = this.areaRectangulo();
}
fibonacci(numero, memo) {
  memo = memo || {};
  if (memo[numero]){
    return memo[numero];
  }
  if (numero-1 <= 1){ 
    return 1;
  }
  this.total1 = memo[numero] = this.fibonacci(numero - 1, memo) + this.fibonacci(numero - 2, memo);
  return  this.total1;
}
calcularFibonacci(){
  this.total1 = this.fibonacci(this.numero,this.memo);
}
}
