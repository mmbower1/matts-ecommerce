const INITIAL_STATE = {
  sections: [
    {
      title: 'Cameras',
      imageUrl: 'https://images.unsplash.com/photo-1516571855259-d5988a8ff76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      size: 'small',
      id: 1,
      linkUrl: 'shop/cameras'
    },
    {
      title: 'Consoles',
      imageUrl: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      size: 'small',
      id: 2,
      linkUrl: 'shop/consoles'
    },
    {
      title: 'Wallets',
      imageUrl: 'https://images.unsplash.com/photo-1564241832533-49e2d87687cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      size: 'small',
      id: 3,
      linkUrl: 'shop/coldwallets'
    },
    {
      title: 'Mining Rigs',
      imageUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      size: 'small',
      id: 4,
      linkUrl: 'shop/rigs'
    },
    {
      title: 'Mobile',
      imageUrl: 'https://images.unsplash.com/photo-1585132884271-bb39983bd2a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      size: 'small',
      id: 6,
      linkUrl: 'shop/mobile'
    },
    {
      title: "Smart Tv's",
      imageUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      size: 'small',
      id: 5,
      linkUrl: 'shop/smart-tv'
    },
    {
      title: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      size: 'large',
      id: 7,
      linkUrl: 'shop/laptops'
    },
  ]
}

const directory = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default directory;