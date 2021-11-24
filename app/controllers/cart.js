import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service shoppingCart;
  // @service('shopping-cart') cart;

  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  get tax() {
    return this.subtotal * 0.09;
  }
  get total() {
    return this.subtotal + this.tax;
  }
}
