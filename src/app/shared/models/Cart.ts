import { CartItem } from './CartItem';

export class Cart{
    items:CartItem[] = [];

    //precisa de um getter para pegar o preço total
    get totalPrice(): number{
        let totalPrice = 0;
        //loop pelos itens pegando o preço de todos
        this.items.forEach(item =>{
            totalPrice += item.price;
        });

        return totalPrice;
    }
}