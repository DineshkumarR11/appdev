import React, { useState, useEffect, useRef } from 'react';
import { Container, Paper, Typography, Button, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';

const QuestionPageContainer = styled(Container)(({ theme }) => ({
  padding: '20px',
  marginTop: '20px',
}));

const questions = [
  {
    questionText: "Question 1: When faced with a challenge, how confident do you feel about overcoming it?",
    options: [
      { optionText: "1. Very confident", points: 10 },
      { optionText: "2. Somewhat confident", points: 8 },
      { optionText: "3. Doubtful", points: 5 },
      { optionText: "4. Not confident", points: 2 }
    ],
  },
  {
    questionText: "Question 2: Which statement resonates with you the most?",
    options: [
      { optionText: "1. Life is full of possibilities.", points: 8 },
      { optionText: "2. Life is unpredictable.", points: 6 },
      { optionText: "3. Life is a struggle.", points: 4 },
      { optionText: "4. Life is beautiful.", points: 10 }
    ],
  },
  {
    questionText: "Question 3: How often do you find it difficult to fall asleep due to racing thoughts?",
    options: [
      { optionText: "1. Rarely", points: 5 },
      { optionText: "2. Occasionally", points: 6 },
      { optionText: "3. Often", points: 8 },
      { optionText: "4. Constantly", points: 10 }
    ],
  },
  {
    questionText: "Question 4: How do you react to compliments?",
    options: [
      { optionText: "1. Appreciate them and move on", points: 8 },
      { optionText: "2. Feel a bit uncomfortable but thankful", points: 6 },
      { optionText: "3. Feel undeserving of them", points: 4 },
      { optionText: "4. Brush them off", points: 2 }
    ],
  },
  {
    questionText: "Question 5: Choose a word that describes your mood today:",
    options: [
      { optionText: "1. Content", points: 8 },
      { optionText: "2. Anxious", points: 6 },
      { optionText: "3. Indifferent", points: 4 },
      { optionText: "4. Excited", points: 10 }
    ],
  },
  {
    questionText: "Question 6: How do you handle criticism?",
    options: [
      { optionText: "1. Open to improvement", points: 10 },
      { optionText: "2. Take it personally but reflect", points: 6 },
      { optionText: "3. Defensive", points: 4 },
      { optionText: "4. Feel devastated", points: 2 }
    ],
  },
  {
    questionText: "Question 7: Which activity would you enjoy most at a social gathering?",
    options: [
      { optionText: "1. Dancing", points: 10 },
      { optionText: "2. Engaging in deep conversations", points: 8 },
      { optionText: "3. Observing others", points: 6 },
      { optionText: "4. Eating", points: 4 }
    ],
  },
  {
    questionText: "Question 8: How often do you feel motivated to accomplish your goals?",
    options: [
      { optionText: "1. Consistently", points: 10 },
      { optionText: "2. Fairly often", points: 8 },
      { optionText: "3. Occasionally", points: 6 },
      { optionText: "4. Rarely", points: 4 }
    ],
  },
  {
    questionText: "Question 9: Choose a quote that resonates with you:",
    options: [
      { optionText: "1. The only way out is through.", points: 8 },
      { optionText: "2. This too shall pass.", points: 6 },
      { optionText: "3. Life is what you make it.", points: 10 },
      { optionText: "4. Everything happens for a reason.", points: 4 }
    ],
  },
];

const scoreRanges = [
  { min: 0, max: 30, category: 'Very High Distress', info: 'This range could suggest that you are experiencing severe emotional distress that likely requires professional attention and support.', recommendation: 'Please consider seeing a psychiatrist for comprehensive evaluation and treatment.' },
  { min: 31, max: 60, category: 'High Distress', info: 'Being in this range might indicate that you are experiencing high levels of stress, anxiety, or emotional challenges that could be affecting your daily functioning.', recommendation: 'Consult with a clinical psychologist or therapist to explore therapeutic options.' },
  { min: 61, max: 90, category: 'Moderate to High Distress', info: 'This range could indicate that you are dealing with significant emotional difficulties or stressors that may be impacting your well-being.', recommendation: 'Seeking help from a licensed therapist could be beneficial for addressing these challenges.' },
  { min: 91, max: 120, category: 'Moderate Distress', info: 'Being in this range might suggest that you are experiencing moderate levels of stress, anxiety, or other emotional challenges.', recommendation: 'Consider talking to a counselor to work through these issues.' },
  { min: 121, max: 150, category: 'Mild Distress', info: 'Falling within this range might mean you are facing some mild stress or occasional emotional difficulties.', recommendation: 'Engaging in stress management techniques and self-care practices could be helpful.' },
  { min: 151, max: 180, category: 'Low Distress', info: 'This range could indicate that you are likely experiencing minimal emotional challenges and overall well-being.', recommendation: 'Maintain your current self-care routine and seek support if needed.' },
];

const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswersLocal, setUserAnswersLocal] = useState(Array(questions.length).fill(null));
  const [showConclusion, setShowConclusion] = useState(false);
  const questionPageRef = useRef(null);

  const handleOptionSelect = (questionIndex, selectedOptionIndex) => {
    const updatedAnswers = [...userAnswersLocal];
    updatedAnswers[questionIndex] = selectedOptionIndex;
    setUserAnswersLocal(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowConclusion(true);
    }
  };

  useEffect(() => {
    if (questionPageRef.current) {
      questionPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentQuestion]);

  const calculateScore = (answers) => {
    return answers.reduce((total, answerIndex, questionIndex) => {
      const points = questions[questionIndex]?.options[answerIndex]?.points || 0;
      return total + points;
    }, 0);
  };

  const getCategory = (score) => {
    return scoreRanges.find(range => score >= range.min && score <= range.max) || { category: 'Unknown', info: 'No information available for this score range.', recommendation: 'N/A' };
  };

  const score = calculateScore(userAnswersLocal);
  const { category, info, recommendation } = getCategory(score);

  return (
    <QuestionPageContainer ref={questionPageRef}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h5">Take the Mental Health Survey</Typography>
        {!showConclusion ? (
          <div>
            <Typography variant="h6">{questions[currentQuestion].questionText}</Typography>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <RadioGroup
                value={userAnswersLocal[currentQuestion] !== null ? userAnswersLocal[currentQuestion].toString() : ""}
                onChange={(e) => handleOptionSelect(currentQuestion, parseInt(e.target.value, 10))}
              >
                {questions[currentQuestion].options.map((option, optionIndex) => (
                  <FormControlLabel key={optionIndex} value={optionIndex} control={<Radio />} label={option.optionText} />
                ))}
              </RadioGroup>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextQuestion}
                style={{ marginTop: '20px' }}
              >
                {currentQuestion === questions.length - 1 ? 'Submit' : 'Next Question'}
              </Button>
            </FormControl>
          </div>
        ) : (
          <div>
            <Typography variant="h5">Survey Results</Typography>
            <Typography variant="h6" style={{ marginTop: '20px' }}>
              Your Total Score: {score}
            </Typography>
            <Typography variant="h6" style={{ marginTop: '20px' }}>
              Category: {category}
            </Typography>
            <Typography variant="body1" style={{ marginTop: '20px' }}>
              {info}
            </Typography>
            <Typography variant="body1" style={{ marginTop: '20px', fontStyle: 'italic' }}>
              Recommended Action: {recommendation}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowConclusion(false)}  // Optionally, reset and restart the survey
              style={{ marginTop: '20px' }}
            >
              Go Back to Questions
            </Button>
          </div>
        )}
      </Paper>
    </QuestionPageContainer>
  );
};

export default QuestionPage;
