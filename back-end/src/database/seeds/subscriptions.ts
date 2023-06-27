import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex('subscriptions').del()
  await knex('subscriptions').insert([
    {
      id: 1,
      name: 'Metlink',
      frequency: 'weekly',
      startDate: '2023-01-1T08:41:30.872Z',
      endDate: '2023-12-12T08:41:30.872Z',
      category: 'Travel',
      price: 5.0,
      reminder:true,
    },
    {
      id: 2,

      name: 'Netflix',

      frequency: 'fortnightly',
      startDate: '2023-01-1T08:41:30.872Z',
      endDate: '2023-12-12T08:41:30.872Z',
      category: 'Entertainment',
      website: 'https://www.netflix.co.nz',
      price: 50.55,
      reminder:true,
    },
    {
      id: 3,
      name: 'Office Max',
      frequency: 'weekly',
      startDate: '2023-01-1T08:41:30.872Z',
      endDate: '2023-12-12T08:41:30.872Z',
      category: 'Productivity',
      website: 'https://www.officemax.co.nz',
      price: 10.0,
      reminder:false,
    },
    {
      id: 4,

      name: 'My Food Bag',
      frequency: 'monthly',
      startDate: '2023-01-1T08:41:30.872Z',
      endDate: '2023-12-12T08:41:30.872Z',
      category: 'Food & Drink',
      website: 'https://www.myfoodbag.co.nz',
      price: 150.0,
         reminder:false,
    },
    {
      id: 5,
  
      name: 'Countdown',
      frequency: 'weekly',
      startDate: '2023-01-1T08:41:30.872Z',
      endDate: '2023-12-12T08:41:30.872Z',
      category: 'Necessities',
      website: 'https://www.countdown.co.nz',
      price: 150.0,
         reminder:true,
    },
    {
      id: 6,
  
      name: 'Contact Energy',
      frequency: 'fortnightly',
      startDate: '2023-01-1T08:41:30.872Z',
      endDate: '2023-12-12T08:41:30.872Z',
      category: 'Bills',
      website: 'https://www.contact.co.nz',
      price: 300.0,
      reminder:true,
    },
   
  ])
}
