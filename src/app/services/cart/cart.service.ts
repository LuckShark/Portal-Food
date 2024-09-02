import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(food:Food):void{
    //Isso é para evitar que tenham comidas duplicadas
    let cartItem = this.cart.items.find(item=> item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return; //aqui ele não vai fazer nada, por que não achamos o item
    cartItem.quantity = quantity;
  }

  getCart():Cart{ //essa função é para encapsular o Cart (que definimos lá na linha 11)
    return this.cart;
  }
}
