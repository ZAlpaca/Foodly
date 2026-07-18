import { Restaurant } from '@/types';

export const restaurants: Restaurant[] = [
  {
    id: 'rest-1',
    name: 'The Golden Truffle',
    description: 'Exquisite handmade pasta and premium white truffle selections.',
    cuisine: 'Italian',
    priceLevel: '$$$',
    rating: 4.8,
    reviewCount: 200,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHSHoYjtF9wdd6_mMGFztfGBDDfgBrGpb0rn81Pj1Jh1iQW_3EvyIk7iEireHotbzKV2RvrXAUh4Y3WFAYhzFXqibY_I9xsbAlLgS0B6XJ_VbSuWvEANEuAp_v_VX8fbNw3WMfDODjpAMI2nQkjviiG6BuluT0AxnIZYAZpHB-jSoZUKYQ7rVFSfrBohNgxdzyuL27MJyC9CIIOv1YwrnmuWQf4MctU2P0UJkJftFhIEN-z2TysOO_HOfkh-6OfEJlXeZ3ZMoI6VzM',
    deliveryTime: '15-25 min',
    deliveryFee: 0,
    distance: '1.8 mi',
    categories: ['cat-1'],
    menu: [
      {
        id: 'item-1',
        name: 'Wild Truffle Risotto',
        description:
          'Arborio rice slow-cooked with seasonal wild mushrooms, fresh black truffle shavings, and aged Parmesan.',
        price: 32.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCEeSwuTcTHlKgD8AaclHh7LvUFeotKmvTstvXRvY9KdJ9GINvuj6jCWKSWCiO9kB6k9Sq31BMtotLpmwTzWRapOUdSJ2YLALFpJ0LyKc-yANWIY_GwvXLFbIex4WB0S99xKVyqTdV-VjHIzy8gC5aXcXeFCTkTLgeFDcFFhP82OvaVGCDAcy7m9XhkU8XUdHn-_f6pME1rIDP0MSnLT01cx7Ubato43lSkosWtczyJf1kRzv4xrtDljrs0UQEGukGY62VApWd-KHDW',
        nutritionalInfo: { calories: 680, protein: '18g', fat: '36g', carbs: '72g' },
        availableOptions: [
          { name: 'Extra Truffle Shavings', price: 5.00 },
          { name: 'Grilled Asparagus', price: 3.50 },
        ],
      },
      {
        id: 'item-2',
        name: 'Pan-Seared Scallops',
        description:
          'Hokkaido scallops served over a velvet parsnip purée with brown butter and pomegranate reduction.',
        price: 45.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAY6I1YW453-TDmWzLUGZBKpwXVo-i7z64F-J8mLfCVWubZ_pLItCxABisQg7jecXhCECJt2JRIylwdubdkGANFk-cnocky97BT8gKgCOBj8ki7KoVVS8RuJ7lUaEoGVy0XuHAXK0B9A6JDqwcSsex4KPjVlR6alV0MV3ivO6sfbUzSrX2FEvdZDlaqHJpPZshEDEn_3PXJs1V9tD3NcBaWE8_h7wfmf2ZuJITQFT73qgV8anTs20mAHv1hlRadcOwgFyrsPLeHPg5o',
        nutritionalInfo: { calories: 520, protein: '34g', fat: '28g', carbs: '22g' },
        availableOptions: [
          { name: 'Extra Scallop', price: 12.00 },
          { name: 'Truffle Mash Side', price: 6.00 },
        ],
      },
      {
        id: 'item-3',
        name: 'Wagyu Beef Rossini',
        description:
          'A5 Wagyu tenderloin, topped with foie gras and Madeira sauce on a toasted brioche base.',
        price: 85.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDJGwzQGkB-Lg0H5IwnsROLOic7al0E8atIBM4Bno-axhwz5hSEWHeE4HXkJi74MY2gFFDgwl7S9aQQKlVFSHM0IMg2zLrjE7J3x31aenP4Q8fgYcHiX3-lyP4eur999VXoFaG0Dfk-7LY63av3HB2k3fzTXPYu73lXaMI4qNx78gztS4mz6sY7jtNXqiJ_FFnYtQO4rHHzTxo_lye2t4tjodxQk0az4HEjBCxuVaIMcHbHN38WBdzCr-J3iSbY_lEiuSKNhdeNBJPe',
        nutritionalInfo: { calories: 920, protein: '52g', fat: '68g', carbs: '24g' },
        availableOptions: [
          { name: 'Truffle Butter Finish', price: 8.00 },
          { name: 'Side of Roasted Vegetables', price: 5.00 },
        ],
      },
      {
        id: 'item-4',
        name: 'Truffle Tagliatelle',
        description:
          'Hand-rolled tagliatelle tossed in a creamy truffle and parmesan sauce with wild mushroom medley.',
        price: 24.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD56uI32Uzgs0yNmPbwMOKpEKtGLX0OEZ-AM7d4U5L-mIYK0BfkjJCB_cSPnogafFlFyoCUEhJAoX0OuvngpkXZgzsltNybkXUFOU7axra20aeR0UTJbpc2qsKYQGqDLFn3wPAwcV760Mv9tQ8J-kqxrDaD7HuyxCep3JzO0ioQLikCB293JQ6N7x3Pqe-5cSF8KVfSIGRO6bN-xWGlOCSB_TwAq7q5M5f6qlK9wBZdtWc4r3lVpV53LvpHY6OMA8zWBJg4rKfMGrj4',
        nutritionalInfo: { calories: 740, protein: '22g', fat: '38g', carbs: '82g' },
        availableOptions: [
          { name: 'Extra Parmesan', price: 2.00 },
          { name: 'Toasted Pine Nuts', price: 3.00 },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-1-1',
        author: 'Sofia Marchetti',
        rating: 5,
        text: 'The Wild Truffle Risotto is absolutely divine. Creamy, earthy, and perfectly al dente. A true taste of Italy.',
        date: '2 weeks ago',
      },
      {
        id: 'rev-1-2',
        author: 'James Chen',
        rating: 4,
        text: 'Exquisite food and impeccable service. The Wagyu Rossini was cooked to perfection. Will definitely return.',
        date: '1 month ago',
      },
    ],
  },
  {
    id: 'rest-2',
    name: 'Sakura Zenith',
    description: 'Contemporary fusion sushi with rare seasonal imports from Tokyo.',
    cuisine: 'Japanese',
    priceLevel: '$$$$',
    rating: 4.9,
    reviewCount: 150,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCO38PB5IfwU_PMhbpKO7qptKDYTVjB7KcHcAbbIcL_T0V8IasLzEM-PM5z3GjhBu4o5W3sCc5Ev7nKmpePiWWTBH6y8Vw4cHHmpIYvchZkyj0Y6tIg9nue4Ko8ye9SAv76OA1-2ylNISfrbkLT1T_KFYNE6zwEB1cUZix7MJuPRuGyj0MedYQHqYHp5Y4WHMHDgrMXWzVdSESpAi__qaqvhVwFJLLpibnT_16KmIFmnKIIrr2s1f6u5k1Whcg16coQv7hDDsU5LtuZ',
    deliveryTime: '20-35 min',
    deliveryFee: 5.99,
    distance: '2.4 mi',
    categories: ['cat-6'],
    menu: [
      {
        id: 'item-5',
        name: 'Omakase Sushi Set',
        description: 'Chef\'s selection of 12 premium nigiri and 6 maki rolls featuring seasonal catches flown in from Tokyo.',
        price: 120.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCZFnXT5X4Q3SRcZqCkEc_fSGunhE_raOZtAY0YivKxJUucPGMypkjCXTp-Z6kBhR8Oy0AVJt-GKfwq72dqIsh6CL6Jy9w3VPk2EI7Msm-Tn9iQgMTSsnTAKHXZ9QIczIngZQJNtkVClqcAQK2G8kuxGatSvmM4d1kWhJp6JEgRKHOfyw6zZMoapBSwfMvpvCwKOgMP_PWqRgvdNbel9JVzIHtyfEEnOgW9oduSY96o0XTXIX4ARcRF_OuALrdLjCIj2Nye8rxJm4N3',
        nutritionalInfo: { calories: 580, protein: '42g', fat: '18g', carbs: '64g' },
        availableOptions: [
          { name: 'Add Uni (Sea Urchin)', price: 15.00 },
          { name: 'Add Otoro (Fatty Tuna)', price: 18.00 },
        ],
      },
      {
        id: 'item-6',
        name: 'Miso Black Cod',
        description: 'Marinated black cod with saikyo miso, served with pickled daikon and steamed rice.',
        price: 48.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAWiI8Z9tdcucmO-Y8GZWLV4DC6d5vaJA8ssnC4GA68ml0PUzcM_TYi3OdChIUzaaSrPHTrmAWpAFteHlxx9-KLYIoXSu2l22PWeIGCV-6esYnoBsS2ARJ1HT1gbidkEQcC-4IL9JI57E3j_RvHlaB5uTmmTLXVvxNxx8C723_Muv9G1S-DcAHP_wEf2jgR1EbGDHndUz_gYxIrs61E7MbjuCiVqFOOdQV61lf8Qk2HP1oE5rGtXHRjrZFO1UGLde6Km1VivXZJJf-H',
        nutritionalInfo: { calories: 450, protein: '38g', fat: '22g', carbs: '28g' },
        availableOptions: [
          { name: 'Extra Miso Glaze', price: 3.00 },
          { name: 'Side of Edamame', price: 4.50 },
        ],
      },
      {
        id: 'item-7',
        name: 'Wagyu Tataki',
        description: 'Seared A5 Wagyu beef with ponzu citrus sauce, daikon radish, and micro shiso.',
        price: 65.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA6sfGsZRAjIiYqgHmYD2BRseBsK_i_7UVkJqhdji6qxqJivNGhGSM4oAeVNhRuSVnfehVu9rGnn0YhWbsPbHjChyc_xb7F1Y-7XtR5jwLdXfI61NiFKTvpnVRcoHD-gikQhSTRGLAk9lFJV8y8ffrR1YmeEbgIO2FJD3JPDcVR0VcDkKG4dD4TaR9Va0EFDdT-9E6-0ZuEottwzOc_CNNPTrpb88wfQTPLSk-RKmHrTX4hYQ3N476l8mgherHT8zf-ak1mduBzv0xP',
        nutritionalInfo: { calories: 480, protein: '34g', fat: '38g', carbs: '12g' },
        availableOptions: [
          { name: 'Truffle Soy Dip', price: 4.00 },
          { name: 'Extra Sesame Seeds', price: 1.50 },
        ],
      },
      {
        id: 'item-8',
        name: 'Truffle Gohan',
        description: 'Steamed Japanese rice bowl with black truffle, shiitake mushrooms, and a soft onsen egg.',
        price: 38.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAgBXijOfFbPXkt_TozNnz29m4JGpVAeKjzvnxSQ5fOxf1CgjbhgplSa8EUoM2E4H7i-bn3gDGoZHOd355_nDIfALj0_Y6hV7ScYoXwkKzShCYwn6mH5jDmGM7V_9jsMK_Nb2ws43zMpnn-AUsWKj_K8rAlwYW_J5fy3EeecbattRRq-pNJvOid7MHT6kkDsgPL2tfwnNeemLv2VA1h6K4S6kh0O1HJ1fZh9yOcvxf7oXAgy8wmSOjsE7mn3da5Fmkm9JCvIWVWvoqC',
        nutritionalInfo: { calories: 390, protein: '14g', fat: '16g', carbs: '48g' },
        availableOptions: [
          { name: 'Extra Onsen Egg', price: 3.00 },
          { name: 'Add Grilled Eel', price: 9.00 },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-2-1',
        author: 'Yuki Tanaka',
        rating: 5,
        text: 'The Omakase set was a journey through flavor. Every piece of sushi melted in my mouth. Truly world-class.',
        date: '1 week ago',
      },
      {
        id: 'rev-2-2',
        author: 'Michael Torres',
        rating: 5,
        text: 'Best Japanese food I have had outside of Tokyo. The Miso Black Cod is spectacular.',
        date: '3 weeks ago',
      },
    ],
  },
  {
    id: 'rest-3',
    name: 'Wagyu Burger Lab',
    description: 'Scientifically perfected burgers using A5 wagyu beef and artisanal buns.',
    cuisine: 'American',
    priceLevel: '$$',
    rating: 4.7,
    reviewCount: 180,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGkkHfwRwcsDkWD6E3FpCpct7oHwM3VZOZOSGP3XaNkNUal3__YoinHX33bQNOKBVVWE3ovqooBNb-dpcSTNHX6-TtLpEUGdZsWpUrubWKxFkE8H2fakZz2u5rUK0gZjuj2JgtiEz-VDzkQFHWy6x9L1cL864r5hOuX2sGX8s773aLhq8S6bG0XxalxuoCS9wvZ_B_OFxYkjB6BE0TDHxJ2ApwwqjPCJTDdggbuot0R9YZQkS4Dr5GgACe5RajYFk-KlBdcINm1SHI',
    deliveryTime: '10-20 min',
    deliveryFee: 1.99,
    distance: '0.9 mi',
    categories: ['cat-5'],
    menu: [
      {
        id: 'item-9',
        name: 'The Truffle Wagyu',
        description:
          '200g Wagyu beef patty, infused with black truffle oil, topped with 24-month aged Gruyère, caramelized balsamic onions, and wild arugula on a handcrafted toasted brioche bun.',
        price: 24.50,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBpJ3xde-leCD8MfCoGLGgcQNQG0wrtywpKI0RwG5Pd9xtQZGAnQ4xQAeA5rNVEKVlxg-qMe1av_2frjVuEsGEeo4ro9vuJlhXERC7aBQQNtEB2TQnRidGY3Xqr5Tv1OvLXMAVozmOiSH8IslB30-TxkPmpOqHh1JsgKX_xSWdsonrzIutVW1uYWr44_kLQ8obRY_jEJJpA49wxbVhEGJz6peUiTC1aPvWNMArFhrfQvFXLIcASnh7rFSXe5cQMMKOBDOQKmoaz1PUQ',
        nutritionalInfo: { calories: 840, protein: '42g', fat: '54g', carbs: '38g' },
        availableOptions: [
          { name: 'Extra Gruyère Cheese', price: 2.50 },
          { name: 'Smoked Streaky Bacon', price: 3.00 },
          { name: 'Truffle Aioli Dip', price: 1.50 },
        ],
      },
      {
        id: 'item-10',
        name: 'Smash Double Cheeseburger',
        description: 'Two smashed wagyu patties with American cheese, house pickles, shredded lettuce, and secret sauce on a potato bun.',
        price: 18.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCZFnXT5X4Q3SRcZqCkEc_fSGunhE_raOZtAY0YivKxJUucPGMypkjCXTp-Z6kBhR8Oy0AVJt-GKfwq72dqIsh6CL6Jy9w3VPk2EI7Msm-Tn9iQgMTSsnTAKHXZ9QIczIngZQJNtkVClqcAQK2G8kuxGatSvmM4d1kWhJp6JEgRKHOfyw6zZMoapBSwfMvpvCwKOgMP_PWqRgvdNbel9JVzIHtyfEEnOgW9oduSY96o0XTXIX4ARcRF_OuALrdLjCIj2Nye8rxJm4N3',
        nutritionalInfo: { calories: 720, protein: '48g', fat: '46g', carbs: '34g' },
        availableOptions: [
          { name: 'Caramelized Onions', price: 1.50 },
          { name: 'Jalapeños', price: 1.00 },
        ],
      },
      {
        id: 'item-11',
        name: 'A5 Wagyu Steak Sandwich',
        description: 'Thinly sliced A5 Wagyu steak with truffle mayo, arugula, and shaved Parmesan on toasted ciabatta.',
        price: 32.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrNVfLautwkdPP9rDOrRIQc73oRJss1ABrQeaxkSpHyDlNr8lDdMMKawClAJ9QWajM85IvAIW4jGWdDzkAhdMfFnKwhqIQPnUa_mGfDsM_e3dk0m96zM3PqyJrNUd3D-M1ULTZ3Zr9Gzce-EXN_eL9KtjWCyjfANROS3ebXwCNS6KeCiHfM-__k4zq3zV8HwoC5gNhexBxgkFHYyJ8kNBH3yCKVHeop5UMmo6gQAZ82KeNR96XYobTOjXk05yXDA8cJYmobpWvJ70',
        nutritionalInfo: { calories: 680, protein: '38g', fat: '44g', carbs: '32g' },
        availableOptions: [
          { name: 'Extra A5 Wagyu', price: 10.00 },
          { name: 'Side of Truffle Fries', price: 5.00 },
        ],
      },
      {
        id: 'item-12',
        name: 'Black Truffle Fries',
        description: 'Crispy golden fries tossed in black truffle oil, topped with Parmesan and fresh parsley.',
        price: 12.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAWiI8Z9tdcucmO-Y8GZWLV4DC6d5vaJA8ssnC4GA68ml0PUzcM_TYi3OdChIUzaaSrPHTrmAWpAFteHlxx9-KLYIoXSu2l22PWeIGCV-6esYnoBsS2ARJ1HT1gbidkEQcC-4IL9JI57E3j_RvHlaB5uTmmTLXVvxNxx8C723_Muv9G1S-DcAHP_wEf2jgR1EbGDHndUz_gYxIrs61E7MbjuCiVqFOOdQV61lf8Qk2HP1oE5rGtXHRjrZFO1UGLde6Km1VivXZJJf-H',
        nutritionalInfo: { calories: 380, protein: '6g', fat: '22g', carbs: '42g' },
        availableOptions: [
          { name: 'Extra Truffle Oil', price: 2.00 },
          { name: 'Side of Aioli', price: 1.50 },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-3-1',
        author: 'Alex Rivera',
        rating: 5,
        text: 'The Truffle Wagyu is hands down the best burger I have ever eaten. Perfectly cooked, incredible flavor.',
        date: '5 days ago',
      },
      {
        id: 'rev-3-2',
        author: 'Priya Sharma',
        rating: 4,
        text: 'Great burgers with high quality ingredients. The Smash Double is a classic done right.',
        date: '2 weeks ago',
      },
    ],
  },
  {
    id: 'rest-4',
    name: "Maison de l'Élégance",
    description: 'Classic and contemporary French culinary craft delivered directly to your door.',
    cuisine: 'French',
    priceLevel: '$$$$',
    rating: 4.9,
    reviewCount: 200,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrNVfLautwkdPP9rDOrRIQc73oRJss1ABrQeaxkSpHyDlNr8lDdMMKawClAJ9QWajM85IvAIW4jGWdDzkAhdMfFnKwhqIQPnUa_mGfDsM_e3dk0m96zM3PqyJrNUd3D-M1ULTZ3Zr9Gzce-EXN_eL9KtjWCyjfANROS3ebXwCNS6KeCiHfM-__k4zq3zV8HwoC5gNhexBxgkFHYyJ8kNBH3yCKVHeop5UMmo6gQAZ82KeNR96XYobTOjXk05yXDA8cJYmobpWvJ70',
    deliveryTime: '25-35 min',
    deliveryFee: 4.99,
    distance: '1.2 mi',
    categories: ['cat-1'],
    menu: [
      {
        id: 'item-13',
        name: 'Wild Truffle Risotto',
        description:
          'Arborio rice slow-cooked with seasonal wild mushrooms, fresh black truffle shavings, and aged Parmesan.',
        price: 32.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCEeSwuTcTHlKgD8AaclHh7LvUFeotKmvTstvXRvY9KdJ9GINvuj6jCWKSWCiO9kB6k9Sq31BMtotLpmwTzWRapOUdSJ2YLALFpJ0LyKc-yANWIY_GwvXLFbIex4WB0S99xKVyqTdV-VjHIzy8gC5aXcXeFCTkTLgeFDcFFhP82OvaVGCDAcy7m9XhkU8XUdHn-_f6pME1rIDP0MSnLT01cx7Ubato43lSkosWtczyJf1kRzv4xrtDljrs0UQEGukGY62VApWd-KHDW',
        nutritionalInfo: { calories: 680, protein: '18g', fat: '36g', carbs: '72g' },
        availableOptions: [
          { name: 'Extra Truffle Shavings', price: 5.00 },
          { name: 'Grilled Asparagus', price: 3.50 },
        ],
      },
      {
        id: 'item-14',
        name: 'Pan-Seared Scallops',
        description:
          'Hokkaido scallops served over a velvet parsnip purée with brown butter and pomegranate reduction.',
        price: 45.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAY6I1YW453-TDmWzLUGZBKpwXVo-i7z64F-J8mLfCVWubZ_pLItCxABisQg7jecXhCECJt2JRIylwdubdkGANFk-cnocky97BT8gKgCOBj8ki7KoVVS8RuJ7lUaEoGVy0XuHAXK0B9A6JDqwcSsex4KPjVlR6alV0MV3ivO6sfbUzSrX2FEvdZDlaqHJpPZshEDEn_3PXJs1V9tD3NcBaWE8_h7wfmf2ZuJITQFT73qgV8anTs20mAHv1hlRadcOwgFyrsPLeHPg5o',
        nutritionalInfo: { calories: 520, protein: '34g', fat: '28g', carbs: '22g' },
        availableOptions: [
          { name: 'Extra Scallop', price: 12.00 },
          { name: 'Truffle Mash Side', price: 6.00 },
        ],
      },
      {
        id: 'item-15',
        name: 'Wagyu Beef Rossini',
        description:
          'A5 Wagyu tenderloin, topped with foie gras and Madeira sauce on a toasted brioche base.',
        price: 85.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDJGwzQGkB-Lg0H5IwnsROLOic7al0E8atIBM4Bno-axhwz5hSEWHeE4HXkJi74MY2gFFDgwl7S9aQQKlVFSHM0IMg2zLrjE7J3x31aenP4Q8fgYcHiX3-lyP4eur999VXoFaG0Dfk-7LY63av3HB2k3fzTXPYu73lXaMI4qNx78gztS4mz6sY7jtNXqiJ_FFnYtQO4rHHzTxo_lye2t4tjodxQk0az4HEjBCxuVaIMcHbHN38WBdzCr-J3iSbY_lEiuSKNhdeNBJPe',
        nutritionalInfo: { calories: 920, protein: '52g', fat: '68g', carbs: '24g' },
        availableOptions: [
          { name: 'Truffle Butter Finish', price: 8.00 },
          { name: 'Side of Roasted Vegetables', price: 5.00 },
        ],
      },
      {
        id: 'item-16',
        name: "The Degustation Experience",
        description:
          'A curated 7-course journey through the finest seasonal ingredients, paired with premium vintages. Reserve required.',
        price: 180.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA6sfGsZRAjIiYqgHmYD2BRseBsK_i_7UVkJqhdji6qxqJivNGhGSM4oAeVNhRuSVnfehVu9rGnn0YhWbsPbHjChyc_xb7F1Y-7XtR5jwLdXfI61NiFKTvpnVRcoHD-gikQhSTRGLAk9lFJV8y8ffrR1YmeEbgIO2FJD3JPDcVR0VcDkKG4dD4TaR9Va0EFDdT-9E6-0ZuEottwzOc_CNNPTrpb88wfQTPLSk-RKmHrTX4hYQ3N476l8mgherHT8zf-ak1mduBzv0xP',
        nutritionalInfo: { calories: 1200, protein: '64g', fat: '78g', carbs: '86g' },
        availableOptions: [
          { name: 'Wine Pairing Upgrade', price: 65.00 },
          { name: 'Caviar Supplement', price: 40.00 },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-4-1',
        author: 'Clara Dupont',
        rating: 5,
        text: 'Absolutely outstanding experience. The Truffle Risotto was creamy, earthy and deeply satisfying. Professional service that is rare to find. Highly recommend!',
        date: '1 week ago',
      },
      {
        id: 'rev-4-2',
        author: 'Jean-Marc',
        rating: 4,
        text: 'The steak Rossini is legendary here. Perfectly cooked, rich foie gras topping. Simply exquisite. Excellent delivery tracking.',
        date: '2 weeks ago',
      },
    ],
  },
  {
    id: 'rest-5',
    name: 'Sourdough & Stone',
    description: 'Artisan pizzas and Italian classics baked in a wood-fired stone oven.',
    cuisine: 'Italian',
    priceLevel: '$$$',
    rating: 4.6,
    reviewCount: 120,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFW1QLC2dnDON2Hb-LEKJvqc-ljez90J8EX8ftIhhCN1XUg3DnQlVi6j4mT3LW63YbGz4gBvU5Drg8XzSay6B0ttoSto7t0zQgWIBwWyQ6lPw9r3rLbEY2WwxwokVTWG0eXoUQhpSWyeKGmQyKZqOo257KBRlRmWZEMMpPnghvKfYXa5ENB6OKwobUlxPhjANilcz5NQiJ3N-aqwc5Vx9I6J5PRUzC0gSyDSVKO82-bklkL9lLjZMY0XD8rfzBtaqrYaoold1gihx',
    deliveryTime: '15-25 min',
    deliveryFee: 0,
    distance: '1.5 mi',
    categories: ['cat-1', 'cat-2'],
    menu: [
      {
        id: 'item-17',
        name: 'Truffle Sourdough Pizza',
        description:
          'Wood-fired sourdough base with truffle cream, wild mushrooms, mozzarella, and a drizzle of white truffle oil.',
        price: 24.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD56uI32Uzgs0yNmPbwMOKpEKtGLX0OEZ-AM7d4U5L-mIYK0BfkjJCB_cSPnogafFlFyoCUEhJAoX0OuvngpkXZgzsltNybkXUFOU7axra20aeR0UTJbpc2qsKYQGqDLFn3wPAwcV760Mv9tQ8J-kqxrDaD7HuyxCep3JzO0ioQLikCB293JQ6N7x3Pqe-5cSF8KVfSIGRO6bN-xWGlOCSB_TwAq7q5M5f6qlK9wBZdtWc4r3lVpV53LvpHY6OMA8zWBJg4rKfMGrj4',
        nutritionalInfo: { calories: 780, protein: '28g', fat: '36g', carbs: '88g' },
        availableOptions: [
          { name: 'Extra Mozzarella', price: 2.50 },
          { name: 'Prosciutto Topping', price: 4.00 },
        ],
      },
      {
        id: 'item-18',
        name: 'Margherita Classica',
        description: 'San Marzano tomato sauce, fresh buffalo mozzarella, basil, and extra virgin olive oil on a sourdough crust.',
        price: 18.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCZFnXT5X4Q3SRcZqCkEc_fSGunhE_raOZtAY0YivKxJUucPGMypkjCXTp-Z6kBhR8Oy0AVJt-GKfwq72dqIsh6CL6Jy9w3VPk2EI7Msm-Tn9iQgMTSsnTAKHXZ9QIczIngZQJNtkVClqcAQK2G8kuxGatSvmM4d1kWhJp6JEgRKHOfyw6zZMoapBSwfMvpvCwKOgMP_PWqRgvdNbel9JVzIHtyfEEnOgW9oduSY96o0XTXIX4ARcRF_OuALrdLjCIj2Nye8rxJm4N3',
        nutritionalInfo: { calories: 620, protein: '24g', fat: '20g', carbs: '82g' },
        availableOptions: [
          { name: 'Buffalo Mozzarella Add', price: 3.00 },
          { name: 'Chilli Flakes', price: 0.50 },
        ],
      },
      {
        id: 'item-19',
        name: 'Burrata e Prosciutto',
        description: 'Creamy burrata cheese with Parma ham, cherry tomatoes, rocket, and a balsamic glaze.',
        price: 22.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrNVfLautwkdPP9rDOrRIQc73oRJss1ABrQeaxkSpHyDlNr8lDdMMKawClAJ9QWajM85IvAIW4jGWdDzkAhdMfFnKwhqIQPnUa_mGfDsM_e3dk0m96zM3PqyJrNUd3D-M1ULTZ3Zr9Gzce-EXN_eL9KtjWCyjfANROS3ebXwCNS6KeCiHfM-__k4zq3zV8HwoC5gNhexBxgkFHYyJ8kNBH3yCKVHeop5UMmo6gQAZ82KeNR96XYobTOjXk05yXDA8cJYmobpWvJ70',
        nutritionalInfo: { calories: 480, protein: '26g', fat: '34g', carbs: '14g' },
        availableOptions: [
          { name: 'Extra Prosciutto', price: 4.00 },
          { name: 'Toasted Pine Nuts', price: 2.50 },
        ],
      },
      {
        id: 'item-20',
        name: 'Tiramisu',
        description: 'Classic Italian tiramisu with mascarpone, espresso-soaked ladyfingers, and cocoa dusting.',
        price: 14.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAWiI8Z9tdcucmO-Y8GZWLV4DC6d5vaJA8ssnC4GA68ml0PUzcM_TYi3OdChIUzaaSrPHTrmAWpAFteHlxx9-KLYIoXSu2l22PWeIGCV-6esYnoBsS2ARJ1HT1gbidkEQcC-4IL9JI57E3j_RvHlaB5uTmmTLXVvxNxx8C723_Muv9G1S-DcAHP_wEf2jgR1EbGDHndUz_gYxIrs61E7MbjuCiVqFOOdQV61lf8Qk2HP1oE5rGtXHRjrZFO1UGLde6Km1VivXZJJf-H',
        nutritionalInfo: { calories: 340, protein: '8g', fat: '18g', carbs: '42g' },
        availableOptions: [
          { name: 'Extra Cocoa Dusting', price: 0.50 },
          { name: 'Vanilla Gelato Side', price: 3.00 },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-5-1',
        author: 'Oliver Grant',
        rating: 5,
        text: 'The sourdough pizza crust is phenomenal. Light, crispy, and perfectly charred. The truffle pizza is a must-try.',
        date: '3 days ago',
      },
      {
        id: 'rev-5-2',
        author: 'Lena Schmidt',
        rating: 4,
        text: 'Lovely Italian classics. The Burrata e Prosciutto is fresh and delicious. Tiramisu is the perfect finish.',
        date: '1 week ago',
      },
    ],
  },
  {
    id: 'rest-6',
    name: 'Pacific Blue Poke',
    description: 'Fresh Hawaiian-inspired poke bowls with sustainably sourced seafood.',
    cuisine: 'Hawaiian',
    priceLevel: '$$',
    rating: 4.5,
    reviewCount: 90,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdkizE9CcOmQDWcMjdhQebEdHabjVW7VpfqYIZFDYKag33m7r2QUzGALiTuj7TEW_wY3su0MqTp6i9bGIxwPAJm75RzpI4GRm3skx5kE7GJIzxgeuTntFocv72pRncNm2IeuSNF_rIawTgF-uv3kUj6xzp5uZuuYX9YNsAR-TtMJCnVY71PAc92yVcecvKHP86jupSQ_pXL0UoxR3iJEbAhNnTwqH5K5KYO8U65hhOXxeImZwDflVpuVxnakSENlaI2IrU3e_DvwVY',
    deliveryTime: '10-20 min',
    deliveryFee: 0,
    distance: '0.7 mi',
    categories: ['cat-1'],
    menu: [
      {
        id: 'item-21',
        name: 'Salmon Poke Bowl',
        description: 'Fresh sashimi-grade salmon with sushi rice, avocado, cucumber, edamame, and sesame ginger dressing.',
        price: 17.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAgBXijOfFbPXkt_TozNnz29m4JGpVAeKjzvnxSQ5fOxf1CgjbhgplSa8EUoM2E4H7i-bn3gDGoZHOd355_nDIfALj0_Y6hV7ScYoXwkKzShCYwn6mH5jDmGM7V_9jsMK_Nb2ws43zMpnn-AUsWKj_K8rAlwYW_J5fy3EeecbattRRq-pNJvOid7MHT6kkDsgPL2tfwnNeemLv2VA1h6K4S6kh0O1HJ1fZh9yOcvxf7oXAgy8wmSOjsE7mn3da5Fmkm9JCvIWVWvoqC',
        nutritionalInfo: { calories: 520, protein: '32g', fat: '18g', carbs: '58g' },
        availableOptions: [
          { name: 'Extra Salmon', price: 4.00 },
          { name: 'Avocado Add', price: 2.50 },
        ],
      },
      {
        id: 'item-22',
        name: 'Tuna Poke Bowl',
        description: 'Fresh ahi tuna marinated in soy-sesame, with brown rice, mango, seaweed salad, and pickled ginger.',
        price: 16.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAi550E-RyISrpxD0VvytRuaXrmufroJsG7cY22chVh9ROTGPHQOHFXDUZ1DoPx5vbxTHxjpRju5PFtqNekwqqs0RHET-6jRXZfHo3uiuEk2EU8rGXl71HViLzZVkqboRw8zAS7h-x_1MpYq_rA8M3Q5Sk6TsK6RzokyWqMM-15_wQErxQbPX-7FGrYeO0F2L7J6rWLuvRPeKLP_TDUsPnOC468KhTj3EV_DJnNFc3ju2LL8QvF0wDmEB9heyPsaedVOjgYjvDfIyRE',
        nutritionalInfo: { calories: 480, protein: '36g', fat: '12g', carbs: '62g' },
        availableOptions: [
          { name: 'Spicy Mayo', price: 1.00 },
          { name: 'Extra Tuna', price: 4.00 },
        ],
      },
      {
        id: 'item-23',
        name: 'Spicy Garlic Edamame',
        description: 'Steamed edamame tossed in a spicy garlic butter sauce with sesame seeds and sea salt.',
        price: 8.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAWiI8Z9tdcucmO-Y8GZWLV4DC6d5vaJA8ssnC4GA68ml0PUzcM_TYi3OdChIUzaaSrPHTrmAWpAFteHlxx9-KLYIoXSu2l22PWeIGCV-6esYnoBsS2ARJ1HT1gbidkEQcC-4IL9JI57E3j_RvHlaB5uTmmTLXVvxNxx8C723_Muv9G1S-DcAHP_wEf2jgR1EbGDHndUz_gYxIrs61E7MbjuCiVqFOOdQV61lf8Qk2HP1oE5rGtXHRjrZFO1UGLde6Km1VivXZJJf-H',
        nutritionalInfo: { calories: 220, protein: '16g', fat: '14g', carbs: '14g' },
        availableOptions: [
          { name: 'Extra Spicy', price: 0.50 },
          { name: 'Truffle Salt', price: 1.50 },
        ],
      },
      {
        id: 'item-24',
        name: 'Mochi Ice Cream',
        description: 'Assorted mochi ice cream bites — vanilla, matcha, and mango. Served with a dusting of kinako.',
        price: 7.00,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBpJ3xde-leCD8MfCoGLGgcQNQG0wrtywpKI0RwG5Pd9xtQZGAnQ4xQAeA5rNVEKVlxg-qMe1av_2frjVuEsGEeo4ro9vuJlhXERC7aBQQNtEB2TQnRidGY3Xqr5Tv1OvLXMAVozmOiSH8IslB30-TxkPmpOqHh1JsgKX_xSWdsonrzIutVW1uYWr44_kLQ8obRY_jEJJpA49wxbVhEGJz6peUiTC1aPvWNMArFhrfQvFXLIcASnh7rFSXe5cQMMKOBDOQKmoaz1PUQ',
        nutritionalInfo: { calories: 180, protein: '3g', fat: '6g', carbs: '30g' },
        availableOptions: [
          { name: 'Extra Matcha Dusting', price: 1.00 },
          { name: 'Add Fresh Berries', price: 2.50 },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-6-1',
        author: 'Keoni Nakamura',
        rating: 5,
        text: 'The freshest poke outside of Hawaii. Salmon bowl is packed with flavor and the portions are generous.',
        date: '4 days ago',
      },
      {
        id: 'rev-6-2',
        author: 'Maya Patel',
        rating: 4,
        text: 'Delicious and healthy! Tuna poke is my go-to. Quick delivery too.',
        date: '2 weeks ago',
      },
    ],
  },
];

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}

export function getRestaurantsByCategory(categoryId: string): Restaurant[] {
  return restaurants.filter((r) => r.categories.includes(categoryId));
}
