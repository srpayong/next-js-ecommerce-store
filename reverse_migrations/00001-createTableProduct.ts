import { Knex } from 'knex';

exports.up = async (knex: Knex) => {
  await knex.schema.createTable('my_table', (table) => {
    table.increments('id');
    table.string('name');
  });
};

exports.down = async (knex: Knex) => {
  await knex.schema.dropTable('my_table');
};
