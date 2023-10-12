import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'menpullover',
    type: 'pullover',
    category: 'Men',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 2,
    name: 'menjeans',
    type: 'Jeans',
    category: 'Men',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 3,
    name: 'menpants',
    type: 'Pants',
    category: 'Men',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 4,
    name: 'womensweater',
    type: 'Sweater',
    category: 'Women',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 5,
    name: 'womenpurse',
    type: 'Purse',
    category: 'Women',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 6,
    name: 'womentrousers',
    type: 'Trousers',
    category: 'Women',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 7,
    name: 'kidsjumpsuit',
    type: 'LinenJumpsuit',
    category: 'Kids',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 8,
    name: 'kidsshirtandpants',
    type: 'ShirtandPants',
    category: 'Kids',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: 9,
    name: 'kidspullandjog',
    type: 'PulloverandJoggers',
    category: 'Kids',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO products
       (name, type, category, price, description)
          VALUES
             (${product.name}, ${product.type}, ${product.category}, ${product.price}, ${product.description})
    `;
  }
}
export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
   DELETE FROM products WHERE id = ${product.id}
`;
  }
}
