import React, { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {


const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positive = Math.round((good * 100) / totalFeedback);
    return Number.isNaN(positive) ? 0 : positive;
  };
  
  const onLeaveFeedback = opt => {
    switch (opt) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  
  const options = ['good', 'neutral', 'bad']
  const totalFeedback = countTotalFeedback();
  
  return (
    <div
        style={{
          heigheight: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      > 
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}>
        </FeedbackOptions>
        <Section title="Statistic">
          {totalFeedback > 0 ? (<Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={countTotalFeedback()} 
            positivePercentage={countPositiveFeedbackPercentage()}> 
          </Statistics>) 
          :
          (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
  )
}
    