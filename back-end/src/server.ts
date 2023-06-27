import express from 'express';
import { getAllSubscriptions,addSubscription, deleteSubscription,updateSubscription,getAllPaymentDates,deletePaymentDates, getSubscriptionById, getPaymentDatesBySubscriptionId } from './database/db';

const server = express();
server.use(express.json());

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
  await deletePaymentDates(id);
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
  const paymentDates = await getPaymentDatesBySubscriptionId(id);
  res.json({ subscription, paymentDates });
});

server.get('/paymentDates', async (req, res) => {
  const paymentDates = await getAllPaymentDates();
  res.json(paymentDates);
});

server.get('/paymentDates/:subscriptionId', async (req, res) => {
  const subscriptionId = Number(req.params.subscriptionId);
  const paymentDates = await getPaymentDatesBySubscriptionId(subscriptionId);
  res.json(paymentDates);
});

export default server;