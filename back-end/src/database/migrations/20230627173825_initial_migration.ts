import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('subscriptions', (table) => {
    table.increments('id')
    table.string('name')
    table.string('frequency')
    table.date('startDate')
    table.date('endDate')
    table.string('category')
    table.string('website')
    table.float('price')
    table.boolean('reminder')
  })

}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('subscriptions')
}

