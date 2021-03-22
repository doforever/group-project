const initialState = {
  deviceType: '',
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
  ],
  brands: [
    {
      id: 'brand-1',
      image:
        'https://cdn.pixabay.com/photo/2015/05/04/20/23/corporate-752923_960_720.png',
    },
    {
      id: 'brand-2',
      image: 'https://cdn.pixabay.com/photo/2015/05/04/20/23/color-752920_960_720.png',
    },
    {
      id: 'brand-3',
      image: 'https://cdn.pixabay.com/photo/2015/05/03/12/38/logo-751133_960_720.png',
    },
    {
      id: 'brand-4',
      image: 'https://cdn.pixabay.com/photo/2015/05/04/20/23/logo-752922_960_720.png',
    },
    {
      id: 'brand-5',
      image: 'https://cdn.pixabay.com/photo/2015/05/04/20/23/logo-752921_960_720.png',
    },
    {
      id: 'mauris-eu-nunc-1',
      name: 'Mauris eu nunc 1',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-2',
      name: 'Mauris eu nunc 2',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-3',
      name: 'Mauris eu nunc 3',
      category: 'chair',
      price: 20,
      oldPrice: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-4',
      name: 'Mauris eu nunc 4',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-5',
      name: 'Mauris eu nunc 5',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-6',
      name: 'Mauris eu nunc 6',
      category: 'chair',
      price: 20,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-7',
      name: 'Mauris eu nunc 7',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-8',
      name: 'Mauris eu nunc 8',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-9',
      name: 'Mauris eu nunc 9',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-10',
      name: 'Mauris eu nunc 10',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-11',
      name: 'Mauris eu nunc 11',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-12',
      name: 'Mauris eu nunc 12',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-13',
      name: 'Mauris eu nunc 13',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-14',
      name: 'Mauris eu nunc 14',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-15',
      name: 'Mauris eu nunc 15',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-16',
      name: 'Mauris eu nunc 16',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-17',
      name: 'Mauris eu nunc 17',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-18',
      name: 'Mauris eu nunc 18',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-19',
      name: 'Mauris eu nunc 19',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'mauris-eu-nunc-20',
      name: 'Mauris eu nunc 20',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-1',
      name: 'Etiam molestie magna 1',
      category: 'sofa',
      price: 35,
      oldPrice: 49,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-2',
      name: 'Etiam molestie magna 2',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-3',
      name: 'Etiam molestie magna 3',
      category: 'sofa',
      price: 35,
      oldPrice: 49,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-4',
      name: 'Etiam molestie magna 4',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-5',
      name: 'Etiam molestie magna 5',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-6',
      name: 'Etiam molestie magna 6',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-7',
      name: 'Etiam molestie magna 7',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-8',
      name: 'Etiam molestie magna 8',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-9',
      name: 'Etiam molestie magna 9',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-10',
      name: 'Etiam molestie magna 10',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-11',
      name: 'Etiam molestie magna 11',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-12',
      name: 'Etiam molestie magna 12',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-13',
      name: 'Etiam molestie magna 13',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-14',
      name: 'Etiam molestie magna 14',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-15',
      name: 'Etiam molestie magna 15',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-16',
      name: 'Etiam molestie magna 16',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-17',
      name: 'Etiam molestie magna 17',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'etiam-molestie-magna-18',
      name: 'Etiam molestie magna 18',
      category: 'sofa',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-1',
      name: 'In egestas sem 1',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-2',
      name: 'In egestas sem 2',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-3',
      name: 'In egestas sem 3',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-4',
      name: 'In egestas sem 4',
      category: 'table',
      price: 29,
      oldPrice: 49,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-5',
      name: 'In egestas sem 5',
      category: 'table',
      price: 29,
      oldPrice: 49,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-6',
      name: 'In egestas sem 6',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-7',
      name: 'In egestas sem 7',
      category: 'table',
      price: 29,
      oldPrice: 49,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-8',
      name: 'In egestas sem 8',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-9',
      name: 'In egestas sem 9',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-10',
      name: 'In egestas sem 10',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-11',
      name: 'In egestas sem 11',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-12',
      name: 'In egestas sem 12',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-13',
      name: 'In egestas sem 13',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-14',
      name: 'In egestas sem 14',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-15',
      name: 'In egestas sem 15',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-16',
      name: 'In egestas sem 16',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-17',
      name: 'In egestas sem 17',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-18',
      name: 'In egestas sem 18',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-19',
      name: 'In egestas sem 19',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-20',
      name: 'In egestas sem 20',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-21',
      name: 'In egestas sem 21',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-22',
      name: 'In egestas sem 22',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-23',
      name: 'In egestas sem 23',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-24',
      name: 'In egestas sem 24',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-25',
      name: 'In egestas sem 25',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-26',
      name: 'In egestas sem 26',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-27',
      name: 'In egestas sem 27',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-28',
      name: 'In egestas sem 28',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-29',
      name: 'In egestas sem 29',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'in-egestas-sem-30',
      name: 'In egestas sem 30',
      category: 'table',
      price: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-1',
      name: 'Pellentesque id dolor 1',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-2',
      name: 'Pellentesque id dolor 2',
      category: 'dining',
      price: 33,
      oldPrice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-3',
      name: 'Pellentesque id dolor 3',
      category: 'dining',
      price: 33,
      oldPrice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-4',
      name: 'Pellentesque id dolor 4',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-5',
      name: 'Pellentesque id dolor 5',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-6',
      name: 'Pellentesque id dolor 6',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-7',
      name: 'Pellentesque id dolor 7',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-8',
      name: 'Pellentesque id dolor 8',
      category: 'dining',
      price: 33,
      oldPrice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-9',
      name: 'Pellentesque id dolor 9',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-10',
      name: 'Pellentesque id dolor 10',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-11',
      name: 'Pellentesque id dolor 11',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-12',
      name: 'Pellentesque id dolor 12',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-13',
      name: 'Pellentesque id dolor 13',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-14',
      name: 'Pellentesque id dolor 14',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-15',
      name: 'Pellentesque id dolor 15',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-16',
      name: 'Pellentesque id dolor 16',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'pellentesque-id-dolor-17',
      name: 'Pellentesque id dolor 17',
      category: 'dining',
      price: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
