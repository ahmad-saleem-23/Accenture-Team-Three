import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('paymentDates', (table) => {
    table.increments('id')
    table.integer('subscriptionId')
    table.date('scheduleDate')
    table.timestamps(true, true)
    table.boolean('isLastDate')
    table.boolean('isPaid')
 
  })
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('paymentDates')
}


