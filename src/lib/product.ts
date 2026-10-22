export interface ProductProps {
  id?: number;
  name: string;
  image: string;
  desc: string;
  version: number;
}

export const products: ProductProps[] = [
  {
    id: 0,
    name: "Laptop",
    image:
      "https://i.pinimg.com/1200x/fe/f7/b3/fef7b3cbaeb59afc974ab04dd20741e6.jpg",
    desc: "A laptop for work and study.",
    version: 1,
  },
  {
    id: 1,
    name: "Smartphone",
    image:
      "https://i.pinimg.com/736x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg",
    desc: "A smartphone for everyday use.",
    version: 2,
  },
  {
    id: 2,
    name: "Headphones",
    image:
      "https://i.pinimg.com/736x/f6/ef/68/f6ef6883d9b19d93ed355b8dc152c16a.jpg",
    desc: "Headphones for listening to music.",
    version: 1,
  },
  {
    id: 3,
    name: "Keyboard",
    image:
      "https://i.pinimg.com/1200x/92/f5/d4/92f5d4c46a100e48a8071a282cb3288d.jpg",
    desc: "A keyboard for typing.",
    version: 3,
  },
  {
    id: 4,
    name: "Mouse",
    image:
      "https://i.pinimg.com/1200x/04/6e/16/046e1607085f2ddde993f6c3868db7ab.jpg",
    desc: "A mouse for controlling your computer.",
    version: 1,
  },
];
