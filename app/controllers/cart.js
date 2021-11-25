import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service shoppingCart;
  // @service('shopping-cart') cart;

  get subtotal() {
    return this.shoppingCart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }
  get tax() {
    return this.subtotal * 0.09;
  }
  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = parseInt(count);
    } else {
      item.count = 0;
    }
  }
}
