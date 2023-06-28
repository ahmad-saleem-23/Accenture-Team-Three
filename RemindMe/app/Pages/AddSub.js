import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {
  Button,
  Input,
  Text,
  ApplicationProvider,
  Layout,
  Toggle,
  Datepicker,
} from '@ui-kitten/components'
import axios from 'axios'
import request from 'superagent'

import * as eva from '@eva-design/eva'

export default ({ navigation }) => {
  const [name, setName] = useState()
  const [frequency, setFrequency] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [category, setCategory] = useState()
  const [website, setWebsite] = useState()
  const [price, setPrice] = useState()
  const [reminder, setReminder] = useState(false)

  const onSubmit = async () => {
    const newSub = {
      name,
      frequency,
      startDate,
      endDate,
      category,
      website,
      price,
      reminder,
    }
     try {
      const response = await request
        .post('http://localhost:3000/v1/addsub')
        .send(newSub)
      console.log(response)
      const paymentDates = manageCalendarEvents(startDate, frequency, endDate)
      console.log(paymentDates)

      for (const date of paymentDates) {
        const scheduleDate = date.date
        const isLastDate = date === paymentDates[paymentDates.length - 1]
        const subscriptionId = response.text
        const paymentDate = { scheduleDate, isLastDate: false }
        if (isLastDate) {
          paymentDate.isLastDate = true
        }
        console.log(subscriptionId)
        console.log(paymentDate)
        await request
          .post(`http://localhost:3000/addpaymentDates/${subscriptionId}`)
          .send({ ...paymentDate })
      }

      navigation.navigate('HomePage')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.heading}>Add a Subscription</Text>

        <Input placeholder="Service Name" value={name} onChangeText={setName} />

        <Datepicker
          label="Start Date"
          date={startDate}
          onSelect={setStartDate}
        />

        <Datepicker label="End Date" date={endDate} onSelect={setEndDate} />

        <Picker
          selectedValue={frequency}
          onValueChange={(itemValue) => setFrequency(itemValue)}
        >
          <Picker.Item label="Select Frequency" value="" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Fortnightly" value="fortnightly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Quarterly" value="quarterly" />
          <Picker.Item label="Semiannually" value="semiannually" />
          <Picker.Item label="Yearly" value="yearly" />
        </Picker>

        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Select Catagory" value="" />
          <Picker.Item label="Food & Drink" value="Food & Drink" />
          <Picker.Item label="Entertainment" value="Entertainment" />
          <Picker.Item label="Necessities" value="Necessities" />
          <Picker.Item label="Bills" value="Bills" />
          <Picker.Item label="Productivity" value="Productivity" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Free Trial" value="Free Trial" />
        </Picker>
        <Input
          placeholder="Website"
          value={website}
          onChangeText={setWebsite}
        />
        <Input
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
          style={styles.input}
          placeholder="Enter price"
        />

        <Toggle checked={reminder} onChange={setReminder}>
          {`Reminder: ${reminder}`}
        </Toggle>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Submit Subscription</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
    paddingHorizontal: 8,
  },

  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
    paddingLeft: 8,
  },

  placeholderText: {
    color: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})

function manageCalendarEvents(startDate, frequency, endDate, maxOccurrences) {
  var events = []
  var currentDate = startDate
  var occurrenceCount = 0

  while (
    (endDate && currentDate <= endDate) ||
    (maxOccurrences && occurrenceCount < maxOccurrences)
  ) {
    events.push({
      date: currentDate.toISOString(),
    })

    var interval = 0
    if (frequency === 'daily') {
      interval = 1
    } else if (frequency === 'weekly') {
      interval = 7
    } else if (frequency === 'fortnightly') {
      interval = 14
    } else if (frequency === 'monthly') {
      interval = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate()
    } else if (frequency === 'quarterly') {
      interval = 3 * 30
    } else if (frequency === 'semiannually') {
      interval = 6 * 30
    } else if (frequency === 'yearly') {
      interval = 365
    }
    var oneDayInMilliseconds = 86400000
    currentDate = new Date(
      currentDate.getTime() + interval * oneDayInMilliseconds
    )

    occurrenceCount++
  }
  return events
}
