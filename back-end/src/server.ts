import express from 'express';
import { getAllSubscriptions,addSubscription, deleteSubscription,updateSubscription,getAllPaymentDates,deletePaymentDates, getSubscriptionById } from './database/db';

const server = express();

// Middleware
server.use(express.json());

// Routes
server.get('/', (req, res) => {
  res.send('Hello, world!');
});

server.get('/add', async (req, res) => {
  
  const subscriptions = await getAllSubscriptions();
  res.json(subscriptions);
});

server.post('/add', async (req, res) => {
  const subscription = req.body;
  await addSubscription(subscription);
  res.json(subscription);
  

});

server.delete('/delete/:id', async (req, res) => {
  const id = Number(req.params.id);
  await deleteSubscription(id);
  res.json(id);
});

server.patch('/update/:id', async (req, res) => {
  const id = Number(req.params.id);
  const subscription = req.body;
  await updateSubscription(id, subscription);
  res.json(subscription);
});

server.get('/subscriptions/:id', async (req, res) => {
  const id = Number(req.params.id);
  const subscription = await getSubscriptionById(id);
  res.json(subscription);
});

export default server;
