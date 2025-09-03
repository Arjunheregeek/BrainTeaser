export const questionsDatabase = {
  "Mental Math": [
    {
      id: 1,
      question_text: "What is 47 × 23?",
      options: {
        A: "1081",
        B: "1071", 
        C: "1061",
        D: "1091"
      },
      correct_answer: "A",
      explanation: "47 × 23 = 1081. Break it down: 47 × 20 = 940, and 47 × 3 = 141. So 940 + 141 = 1081.",
      difficulty: "medium",
      points: 15
    },
    // ... 4 more Mental Math questions
  ],

  "Current Affairs": [
    {
      id: 6,
      question_text: "Which country hosted the 2024 Summer Olympics?",
      options: {
        A: "Japan",
        B: "France",
        C: "USA",
        D: "Australia"
      },
      correct_answer: "B",
      explanation: "France (Paris) hosted the 2024 Summer Olympics from July 26 to August 11, 2024.",
      difficulty: "easy",
      points: 10
    },
    // ... 4 more Current Affairs questions
  ],

  "General Knowledge": [
    {
      id: 11,
      question_text: "What is the largest planet in our solar system?",
      options: {
        A: "Saturn",
        B: "Jupiter", 
        C: "Neptune",
        D: "Uranus"
      },
      correct_answer: "B",
      explanation: "Jupiter is the largest planet in our solar system, with a mass greater than all other planets combined.",
      difficulty: "easy",
      points: 10
    },
    // ... 4 more General Knowledge questions
  ],

  "Science": [
    {
      id: 16,
      question_text: "What is the speed of light in a vacuum?",
      options: {
        A: "299,792,458 m/s",
        B: "300,000,000 m/s",
        C: "299,999,999 m/s",
        D: "298,000,000 m/s"
      },
      correct_answer: "A",
      explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second, a fundamental constant of nature.",
      difficulty: "hard",
      points: 20
    },
    // ... 4 more Science questions
  ],

  "History": [
    {
      id: 21,
      question_text: "In which year did World War II end?",
      options: {
        A: "1944",
        B: "1945",
        C: "1946",
        D: "1947"
      },
      correct_answer: "B",
      explanation: "World War II ended in 1945, with Germany surrendering in May and Japan surrendering in September after the atomic bombings.",
      difficulty: "easy",
      points: 10
    },
    // ... 4 more History questions
  ],

  "Geography": [
    {
      id: 26,
      question_text: "What is the capital of Australia?",
      options: {
        A: "Sydney",
        B: "Melbourne", 
        C: "Canberra",
        D: "Brisbane"
      },
      correct_answer: "C",
      explanation: "Canberra is the capital of Australia, located in the Australian Capital Territory between Sydney and Melbourne.",
      difficulty: "medium",
      points: 15
    },
    // ... 4 more Geography questions
  ]
  };

  export default questionsDatabase;
