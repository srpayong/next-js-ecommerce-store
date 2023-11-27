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
    CREATE TABLE
      products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        NAME VARCHAR(30) NOT NULL,
        TYPE VARCHAR(30) NOT NULL,
        category VARCHAR(30) NOT NULL,
        price INTEGER NOT NULL,
        description VARCHAR(100) NOT NULL
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
