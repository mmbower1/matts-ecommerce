const SHOP_DATA = [
  {
    id: 1,
    title: 'Tinctures',
    routeName: 'tinctures',
    items: [
      {
        id: 1,
        name: 'Strawberry Wild',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 2,
        name: 'Sunset Serbert Tincture',
        imageUrl: 'https://images.unsplash.com/photo-1562782567-a8e7809893bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        price: 35
      },
      {
        id: 3,
        name: 'Grape Jelly Tincture',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 4,
        name: 'Trainwreck Tincture',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1564833125683-b9fde4516274?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        price: 30
      },
      {
        id: 5,
        name: 'Lemon Haze Tincture',
        imageUrl: '',
        price: 30
      },
      {
        id: 6,
        name: 'Thin Mint Cookies Tincture',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 7,
        name: 'Cookies Tincture',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 8,
        name: 'Cereal Milk Tincture',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 35
      },
      {
        id: 9,
        name: 'Blue Dream Tincture',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      }
    ]
  },
  {
    id: 2,
    title: 'Edibles',
    routeName: 'edibles',
    items: [
      {
        id: 10,
        name: 'Brownie',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 11,
        name: 'M&M Cookie',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 12,
        name: 'Gummy Bears',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 13,
        name: 'Chocolate Bar',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 14,
        name: 'Weed Butter',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 15,
        name: 'Hemp2-O',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 4
      },
      {
        id: 16,
        name: 'Snickerdoodle',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      }
    ]
  },
  {
    id: 3,
    title: 'Topicals',
    routeName: 'topicals',
    items: [
      {
        id: 17,
        name: 'Butterfinger',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 30
      },
      {
        id: 18,
        name: 'Topical 2',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 30
      },
      {
        id: 19,
        name: 'Topical 3',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 30
      },
      {
        id: 20,
        name: 'Topical 4',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 30
      },
      {
        id: 21,
        name: 'Topical 5',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 30
      }
    ]
  },
  {
    id: 4,
    title: 'Capsules',
    routeName: 'capsules',
    items: [
      {
        id: 22,
        name: 'Capsules 7',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 23,
        name: 'Capsules 8',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 24,
        name: 'Capsules 9',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 25,
        name: 'Capsules 10',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 26,
        name: 'Capsules 11',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      }
    ]
  },
  {
    id: 5,
    title: 'Pets',
    routeName: 'pets',
    items: [
      {
        id: 27,
        name: 'Pets 1',
        imageUrl: 'https://images.unsplash.com/photo-1573461217066-9413a9627ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        price: 30
      },
      {
        id: 28,
        name: 'Pets 2',
        imageUrl: 'https://images.unsplash.com/photo-1571170685445-94f230d55140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 35
      },
      {
        id: 29,
        name: 'Pets 3',
        imageUrl: 'https://images.unsplash.com/photo-1571941727012-783f3768de46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
        price: 30
      },
      {
        id: 30,
        name: 'Pets 4',
        imageUrl: 'https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 31,
        name: 'Pets 5',
        imageUrl: 'https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      },
      {
        id: 32,
        name: 'Pets 6',
        imageUrl: 'https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      }
    ]
  },
  {
    id: 6,
    title: 'Sleep',
    routeName: 'sleep',
    items: [
      {
        id: 33,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 30
      },
      {
        id: 34,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 30
      },
      {
        id: 35,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 35
      },
      {
        id: 36,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 30
      },
      {
        id: 37,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 30
      },
      {
        id: 38,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 30
      }
    ]
  },
  {
    id: 7,
    title: 'Bundles',
    routeName: 'bundles',
    items: [
      {
        id: 39,
        name: 'Bundle 1',
        imageUrl: 'https://images.unsplash.com/photo-1557934866-261e8b45f102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        price: 60
      },
      {
        id: 40,
        name: 'Bundle 2',
        imageUrl: 'https://images.unsplash.com/photo-1557934866-261e8b45f102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        price: 70
      },
      {
        id: 41,
        name: 'Bundle 3',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 42,
        name: 'Bundle 4',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 43,
        name: 'Bundle 5',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 44,
        name: 'Bundle 6',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 100
      }
    ]
  }
]

export default SHOP_DATA;