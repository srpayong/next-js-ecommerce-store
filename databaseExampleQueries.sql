-- this file will not run, it's created only to save the queries so we can have easy access to it.

-- Create a products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  category varchar(30) NOT NULL,
  price integer,
  description varchar(100) NOT NULL
);

-- Insert products
INSERT INTO products
  (name, type, category, price, description)
VALUES
( 'menpullover', 'Pullover', 'Men', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'menjeans','Jeans', 'Men', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'menpants', 'Pants', 'Men', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'womensweater', 'Sweater', 'Women', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'womenpurse', 'Purse', 'Women', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'womentrousers', 'Trousers', 'Women', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'kidsjumpsuit', 'LinenJumpsuit', 'Kids', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'kidsshirtandpants', 'ShirtandPants', 'Kids', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'kidspullandjog', 'PulloverandJoggers', 'Kids', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor');


-- Read products
SELECT * FROM products;

-- -------------------------------------

-- export function getProductById(id: number) {
--   return products1.find((product) => product.id === id);
-- }

-- // createtable //

-- import { Sql } from 'postgres';

-- export type Product = {
--   id: number;
--   name: string;
--   type: string;
--   category: string;
--   price: number | null;
--   description: string;
-- };

-- export async function up(sql: Sql) {
--   await sql`
--   CREATE TABLE products (
--   id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
--   name varchar(30) NOT NULL,
--   type varchar(30) NOT NULL,
--   category varchar(30) NOT NULL,
--   price integer,
--   description varchar(100) NOT NULL
--     );
--   `;
-- }

-- export async function down(sql: Sql) {
--   await sql`
--   DROP TABLE products
-- `;
-- }


-- // insertProducts//
-- import { Sql } from 'postgres';

-- const products = [
--   {
--     id: 1,
--     name: 'menpullover',
--     type: 'pullover',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 2,
--     name: 'menjeans',
--     type: 'Jeans',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 3,
--     name: 'menpants',
--     type: 'Pants',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 4,
--     name: 'womensweater',
--     type: 'Sweater',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 5,
--     name: 'womenpurse',
--     type: 'Purse',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 6,
--     name: 'womentrousers',
--     type: 'Trousers',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 7,
--     name: 'kidsjumpsuit',
--     type: 'LinenJumpsuit',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 8,
--     name: 'kidsshirtandpants',
--     type: 'ShirtandPants',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
--   {
--     id: 9,
--     name: 'kidspullandjog',
--     type: 'PulloverandJoggers',
--     price: 35,
--     description:
--       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
--   },
-- ];

-- export async function up(sql: Sql) {
--   for (const product of products) {
--     await sql`
--       INSERT INTO products
--        (name, type, price, description)
--           VALUES
--              (${product.name}, ${product.type}, ${product.price}, ${product.description})
--     `;
--   }
-- }
-- export async function down(sql: Sql) {
--   for (const product of products) {
--     await sql`
--    DELETE FROM products WHERE id = ${product.id}
-- `;
--   }
-- }

//createTableProducts
import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  category: string;
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  category varchar(30) NOT NULL,
  price integer NOT NULL,
  description varchar(100) NOT NULL
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
`;
}

//insertProduct
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
