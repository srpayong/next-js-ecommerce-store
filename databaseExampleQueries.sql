-- this file will not run, it's created only to save the quearies so we can have easy access to it.

-- Create a products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  price integer,
  description varchar(100) NOT NULL
);

-- Insert products
INSERT INTO products
  (name, type, price, description)
VALUES
( 'menpullover', 'Pullover', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'menjeans','Jeans', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'menpants', 'Pants', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'womensweater', 'Sweater', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'womenpurse', 'Purse', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'womentrousers', 'Trousers', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'kidsjumpsuit', 'LinenJumpsuit', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'kidsshirtandpants', 'ShirtandPants', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'),
( 'kidspullandjog', 'PulloverandJoggers', 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor');


-- Read products
SELECT * FROM products;

-- -------------------------------------

-- export function getProductById(id: number) {
--   return products1.find((product) => product.id === id);
-- }
