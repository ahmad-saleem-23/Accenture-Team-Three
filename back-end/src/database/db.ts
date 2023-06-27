import connection from './connection'

export function getAllSubscriptions(db = connection) {
  return db('subscriptions').select()
}

export function getSubscriptionById(id: number, db = connection) {
  return db('subscriptions')
    .where('id', id)
    .first()
}


type newSubscription = { name: string, frequency: string, startDate: string, endDate: string, category: string, website?: string, price: number, reminder?: boolean }

export function addSubscription(subscription: newSubscription, db = connection) {
  return db('subscriptions')
    .insert(subscription)
}

type updatedSubscription = { name?: string, frequency?: string, startDate?: string, endDate?: string, category?: string, website?: string, price?: number, reminder?: boolean }

export function updateSubscription(id: number, subscription: updatedSubscription, db = connection) {
  return db('subscriptions')
    .where('id', id)
    .update(subscription)
}

export function deleteSubscription(id: number, db = connection) {
  return db('subscriptions')
    .where('id', id)
    .delete()
}

export function getAllPaymentDates(db = connection) {
  return db('paymentDates')
    .join('subscriptions', 'paymentDates.subscriptionId', 'subscriptions.id')
    .select('paymentDates.id', 'paymentDates.subscriptionId', 'paymentDates.scheduleDate', 'subscriptions.name', 'subscriptions.frequency', 'subscriptions.startDate', 'subscriptions.endDate', 'subscriptions.category', 'subscriptions.website', 'subscriptions.price', 'subscriptions.reminder')

}

export function getPaymentDatesBySubscriptionId(subscriptionId: number, db = connection) {
  return db('paymentDates')
    .where('subscriptionId', subscriptionId)
    .select()
}


export function deletePaymentDates(subscriptionId: number, db = connection) {
  return db('paymentDates')
    .where('subscriptionId', subscriptionId)
    .delete()
}

interface PaymentsDatesProp {
  scheduleDate?: string
  isLastDate?: boolean
}

export function addPaymentDates( subscriptionId: number, paymentsDates: PaymentsDatesProp, db = connection) {
  return db('paymentDates')
    .insert({ subscriptionId, ...paymentsDates })
}