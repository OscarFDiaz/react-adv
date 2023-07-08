import { Product, ProductInCart } from '../interfaces/interfaces';
import { useState } from 'react';

interface onChangeProprs {
  count: number;
  product: Product;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeProprs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      // Update counter
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...oldShoppingCart, [productInCart.id]: productInCart };
      }

      // Delete product
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // NOT CONTROLLED
      // if (count === 0) {
      //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
