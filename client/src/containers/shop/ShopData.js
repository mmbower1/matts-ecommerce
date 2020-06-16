const SHOP_DATA = [
  {
    id: 1,
    title: 'Cameras',
    routeName: 'cameras',
    items: [
      {
        id: 1,
        name: 'Nikon Z6',
        imageUrl: 'https://images.unsplash.com/photo-1554136545-2f288e8cf4bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1600
      },
      {
        id: 2,
        name: 'Fujifilm X-T4',
        imageUrl: 'https://images.unsplash.com/photo-1588377845181-ab40e4a88d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1800
      },
      {
        id: 3,
        name: 'Sony A7 III',
        imageUrl: 'https://images.unsplash.com/photo-1567871322757-fb3090aa8364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1800
      },
      {
        id: 4,
        name: 'Nikon Z50',
        imageUrl: 'https://images.unsplash.com/photo-1477510651907-cf809ee534c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1100
      },
      {
        id: 5,
        name: 'Sony A6100',
        imageUrl: 'https://images.unsplash.com/photo-1585155802409-ff2950580a9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 700
      },
      {
        id: 6,
        name: 'Fujifilm X100V',
        imageUrl: 'https://images.unsplash.com/photo-1454179659346-524fcc7bd5e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1300
      },
      {
        id: 7,
        name: 'Sony ZV-1',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 1300
      },
      {
        id: 8,
        name: 'Canon SLR',
        imageUrl: 'https://images.unsplash.com/photo-1483932981361-26ddd9a5d30a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 2000
      }
    ]
  },
  {
    id: 2,
    title: 'Consoles',
    routeName: 'consoles',
    items: [
      {
        id: 10,
        name: 'Playstation 5',
        imageUrl: 'https://thegadgetflow.com/wp-content/uploads/2020/02/PS5-Everything-you-need-to-know-1200x675.jpg',
        price: 500
      },
      {
        id: 11,
        name: 'Playstation 4',
        imageUrl: 'https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 300
      },
      {
        id: 12,
        name: 'Nintendo Switch',
        imageUrl: 'https://images.unsplash.com/photo-1576057121724-6f505058a21e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 350
      },
      {
        id: 13,
        name: 'Nintendo Switch Lite',
        imageUrl: 'https://images.unsplash.com/photo-1569089630965-daa2d5aa3860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 250
      },
      {
        id: 14,
        name: 'Xbox One X',
        imageUrl: 'https://images.unsplash.com/photo-1588495752527-77d65c21f7cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 300
      },
      {
        id: 15,
        name: 'Xbox One S',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 300
      }
    ]
  },
  {
    id: 3,
    title: 'Cold Wallets',
    routeName: 'coldwallets',
    items: [
      {
        id: 17,
        name: 'Ledger Nano X',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71iuWcZTPkL._AC_SL1500_.jpg',
        price: 60
      },
      {
        id: 18,
        name: 'Ellipal Titan',
        imageUrl: 'https://news.bitcoin.com/wp-content/uploads/2019/09/ellipal.jpg',
        price: 70
      },
      {
        id: 19,
        name: 'Trezor T',
        imageUrl: 'https://miro.medium.com/max/1000/1*sH0oPluppgUOZ8ck6oSwlw.jpeg',
        price: 60
      },
      {
        id: 20,
        name: 'KeepKey',
        imageUrl: 'https://news.bitcoin.com/wp-content/uploads/2016/05/keep_key.jpg',
        price: 70
      }
    ]
  },
  {
    id: 4,
    title: 'Mining Rigs',
    routeName: 'rigs',
    items: [
      {
        id: 22,
        name: 'Shark Mini',
        imageUrl: 'https://www.bitcoinmarketjournal.com/wp-content/uploads/2018/12/best-crypto-mining-rig.jpg',
        price: 1800
      },
      {
        id: 23,
        name: 'Alienware Area 51 Threadripper',
        imageUrl: 'https://i.pinimg.com/originals/f4/6f/9f/f46f9fbd763b3131d89c41d70a51fc83.jpg',
        price: 1100
      },
      {
        id: 24,
        name: 'Bitmain S17 Pro',
        imageUrl: 'https://5.imimg.com/data5/GR/GC/JB/SELLER-100217441/bitmain-antminer-s17-pro-53th-s-with-psu-500x500.jpg',
        price: 30
      },
      {
        id: 25,
        name: 'Antminer D3',
        imageUrl: 'https://i.ebayimg.com/images/g/uOcAAOSw9j9am0PJ/s-l640.jpg',
        price: 30
      },
      {
        id: 26,
        name: 'MSI Infinite A',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 30
      }
    ]
  },
  {
    id: 5,
    title: 'Mobile',
    routeName: 'mobile',
    items: [
      {
        id: 27,
        name: 'iPhone 11',
        imageUrl: 'https://images.unsplash.com/photo-1574771540177-1b67712f6c6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1100
      },
      {
        id: 28,
        name: 'iPhone 11 Pro Max',
        imageUrl: 'https://images.unsplash.com/photo-1571654681830-ef991494a42a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1150
      },
      {
        id: 29,
        name: 'Samsung Galaxy S20',
        imageUrl: 'https://images.unsplash.com/photo-1583225173317-5de81344a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1000
      },
      {
        id: 30,
        name: 'Samsung Galaxy Note 10 Plus',
        imageUrl: 'https://www.droid-life.com/wp-content/uploads/2019/08/Galaxy-Note-10-Plus-37-of-43-980x653.jpg',
        price: 30
      },
      {
        id: 31,
        name: 'OnePlus 8 Pro',
        imageUrl: 'https://www.androidpolice.com/wp-content/uploads/2020/04/op8-10-scaled.jpg',
        price: 30
      }
    ]
  },
  {
    id: 6,
    title: "Laptops",
    routeName: 'smart-tv',
    items: [
      {
        id: 33,
        name: 'Dell XPS 13',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/4mpwBSSMkPCU3wNEMvZYqS-970-80.jpeg',
        price: 30
      },
      {
        id: 34,
        name: 'MacBook Pro',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/EyL53xGa5B32a7BPYVNyu8-970-80.jpg',
        price: 30
      },
      {
        id: 35,
        name: 'Acer Swift 3',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/urg7X4xS5WTP3ji3f6befD-970-80.jpg',
        price: 35
      },
      {
        id: 36,
        name: 'Asus Chromebook C434',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/cJeiRdQGqfr28hiL77cHyB-970-80.jpg',
        price: 30
      },
      {
        id: 37,
        name: 'HP Envy 13t',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/LUbtZqcZC3PuA36noSzGXm-970-80.jpeg',
        price: 30
      },
      {
        id: 38,
        name: 'Samsung Galaxy Book Flex 15',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 30
      }
    ]
  },
  {
    id: 7,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 39,
        name: 'Apple Ear Pods',
        imageUrl: 'https://contestimg.wish.com/api/webimage/5e9ab6fcd0cc9527c084c821-large.jpg?cache_buster=d2b0532b04a715d442941829d0b8ecf0',
        price: 60
      },
      {
        id: 40,
        name: 'iPad Pro',
        imageUrl: 'https://icdn2.digitaltrends.com/image/digitaltrends/ipad-pro-2018-review-5848.jpg',
        price: 70
      },
      {
        id: 41,
        name: 'DJI Mavic Air 2',
        imageUrl: 'https://www1.djicdn.com/cms/uploads/6f491260a5143b39941221b394816aa4@770*462.jpg',
        price: 80
      },
      {
        id: 42,
        name: 'Controllers',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/TV_Kp0fK16c85n_ifjLGjv6kmZ4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12548919/xboxonescontroller.JPG',
        price: 80
      },
      {
        id: 43,
        name: 'HDMI Cable',
        imageUrl: 'https://yourwideguide.com/wp-content/uploads/2019/02/hdmi-cable-top.jpg',
        price: 80
      },
      {
        id: 44,
        name: 'Blue Yeti Michrophone',
        imageUrl: 'https://techzono.net/wp-content/uploads/2015/08/yeti-gallery-01.jpg',
        price: 100
      }
    ]
  }
]

export default SHOP_DATA;