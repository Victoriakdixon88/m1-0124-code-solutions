interface ItemsObject {
  itemName?: string;
  bookTitle?: string;
  author?: string;
  itemPrice: number;
}

interface deliveryObject {
  orderDate: string;
  deliveryDate: string;
  returnDate: string;
  itemTotal: number;
  orderNumber: string;
  shipTo: string;
  products: ItemsObject[];
}

const orderHistory: deliveryObject[] = [
  // first order
  {
    orderDate: 'Aug 4, 2020',
    deliveryDate: 'Aug 8, 2020',
    returnDate: 'Sep 7, 2020',
    itemTotal: 34.0,
    orderNumber: `114-3941689-8772232`,
    shipTo: `JS Masher`,
    products: [
      {
        bookTitle: `JavaScript for impatient programmers`,
        author: `Rauschmayer, Dr. Axel`,
        itemPrice: 31.55,
      },
    ],
  },
  // second order

  {
    orderDate: 'Jul 19,2020',
    deliveryDate: 'Jul 20,2020',
    returnDate: 'Aug 19,2020',
    itemTotal: 44.53,
    orderNumber: `113-9984268-1280257`,
    shipTo: `JS Masher`,
    products: [
      {
        bookTitle: `The Timeless Way of Building`,
        author: `Alexander, Christopher`,
        itemPrice: 41.33,
      },
    ],
  },
  // third order
  {
    orderDate: 'Jul 4,2020',
    deliveryDate: 'Jul 7,2020',
    returnDate: 'Aug 5,2020',
    itemTotal: 17.22,
    orderNumber: `114-2875557-9059409`,
    shipTo: `JS Masher`,
    products: [
      {
        itemName: `GameCube Controller Adapter. SUper Smash Bros Switch Gamecube Adapter for WII U, PC Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter`,
        itemPrice: 15.98,
      },
    ],
  },
  // fourth order
  {
    orderDate: 'Jul 3,2020',
    deliveryDate: 'Jul 5,2020',
    returnDate: 'Aug 4,2020',
    itemTotal: 138.93,
    orderNumber: `113-2883177-2648248`,
    shipTo: `JS Masher`,
    products: [
      {
        itemName: `GameCube Controller - Super Smash Bors. Edition (Nintendo Switch)`,
        itemPrice: 94.95,
      },
      {
        bookTitle: `The Art of Sql`,
        author: `Faroult, Stephanie`,
        itemPrice: 33.99,
      },
    ],
  },
];

console.log('Order History:', orderHistory);
