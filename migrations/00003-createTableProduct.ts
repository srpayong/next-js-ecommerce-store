import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  price: number | null;
  description: string;
};
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  price integer,
  description varchar(100) NOT NULL
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
`;
}
