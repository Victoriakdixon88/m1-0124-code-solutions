// Objects can obtain arrays, Objects with the arrays should contain the items in the order
// Property and Values should follow the same shape
// Created the items object to contain all items delivered in the order.
// created the dated object to provide delivery details and include the array [] of items object
// author? is optional as not all orders included a book

interface itemsObject {
  itemName: string;
  author?: string;
  returnDate: string;
  itemPrice: number;
}

interface datedObject {
  deliveryDate: string;
  itemTotal: number;
  orderNumber: string;
  products: itemsObject[];
}

const orderHistory: datedObject[] = [
  {
    deliveryDate: 'Aug 8, 2020',
    itemTotal: 34.0,
    orderNumber: '114-3941689-8772232',
    products: [
      {
        itemName: 'JavaScript for impatient programmers',
        author: `Rauschmayer, Dr. Axel`,
        returnDate: `Sep 7, 2020`,
        itemPrice: 31.55,
      },
    ],
  },

  {
    deliveryDate: 'Jul 20, 2020',
    itemTotal: 44.53,
    orderNumber: '113-9984268-1280257',
    products: [
      {
        itemName: 'The Timeless Way of Building',
        author: `Alexander, Christopher`,
        returnDate: `Aug 19, 2020`,
        itemPrice: 41.33,
      },
    ],
  },

  {
    deliveryDate: 'Jul 7, 2020',
    itemTotal: 17.22,
    orderNumber: '114-2875557-9059409',
    products: [
      {
        itemName:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No lag-Gamecube Adapter.',
        returnDate: `Aug 5, 2020`,
        itemPrice: 15.98,
      },
    ],
  },

  {
    deliveryDate: 'Jul 5, 2020',
    itemTotal: 138.93,
    orderNumber: '113-2883177-2648248',
    products: [
      {
        itemName:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnDate: `Aug 4, 2020`,
        itemPrice: 94.95,
      },

      {
        itemName: `The Art of Sql`,
        author: `Faroult, Stephanie`,
        returnDate: `Aug 4, 2020`,
        itemPrice: 33.99,
      },
    ],
  },
];
console.log(orderHistory);
