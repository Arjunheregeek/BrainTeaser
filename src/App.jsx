import React, { useState } from 'react'
import { Calculator, Globe, Brain, Beaker, Clock, MapPin, Code, ArrowLeft, CheckCircle, XCircle } from 'lucide-react'
import { questionsDatabase } from './data/questions.js'

const topics = [
  { name: 'Mental Math', icon: Calculator, emoji: '🧮', description: 'Test your quick calculation skills with fun math problems' },
  { name: 'Current Affairs', icon: Globe, emoji: '🌍', description: 'Stay updated with recent news and world events' },
  { name: 'General Knowledge', icon: Brain, emoji: '🧠', description: 'Challenge yourself with mixed trivia and interesting facts' },
  { name: 'Science', icon: Beaker, emoji: '⚗️', description: 'Explore physics, chemistry, and biology concepts' },
  { name: 'History', icon: Clock, emoji: '⏰', description: 'Journey through historical events and famous figures' },
  { name: 'Geography', icon: MapPin, emoji: '📍', description: 'Discover countries, capitals, and geographical wonders' }
]

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showCode, setShowCode] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const handleAnswerSelect = (answerKey) => {
    setSelectedAnswer(answerKey)
  }

  const handleNextQuestion = () => {
    const currentQuestions = questionsDatabase[selectedTopic.name]
    const currentQuestion = currentQuestions[currentQuestionIndex]
    
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + currentQuestion.points)
    }
    
    setShowResult(true)
    
    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setSelectedTopic(null)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  // QUIZ VIEW - When topic selected and not completed
  if (selectedTopic && !quizCompleted) {
    const currentQuestions = questionsDatabase[selectedTopic.name]
    const currentQuestion = currentQuestions[currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correct_answer

    return (
      <div className="app-container">
        <div className="quiz-container">
          <div className="quiz-content">
            <button onClick={resetQuiz} className="back-button">
              <ArrowLeft size={18} />
              Back to Topics
            </button>
            
            <div className="quiz-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}></div>
              </div>
              <p className="progress-text">Question {currentQuestionIndex + 1} of {currentQuestions.length}</p>
            </div>

            <div className="quiz-card">
              <div className="quiz-header">
                <span className="quiz-emoji">{selectedTopic.emoji}</span>
                <h2 className="quiz-title">{selectedTopic.name} Quiz</h2>
                <div className="score-display">Score: {score}</div>
              </div>
              
              <div className="question-container">
                <h3 className="question-text">{currentQuestion.question_text}</h3>
                
                <div className="options-grid">
                  {Object.entries(currentQuestion.options).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => handleAnswerSelect(key)}
                      disabled={showResult}
                      className={`option-button ${selectedAnswer === key ? 'selected' : ''} ${showResult && key === currentQuestion.correct_answer ? 'correct' : ''} ${showResult && selectedAnswer === key && key !== currentQuestion.correct_answer ? 'incorrect' : ''}`}
                    >
                      {key}) {value}
                    </button>
                  ))}
                </div>

                {showResult && (
                  <div className="result-container">
                    <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle size={24} />
                          <span>Correct! +{currentQuestion.points} points</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={24} />
                          <span>Incorrect!</span>
                        </>
                      )}
                    </div>
                    <p className="explanation">{currentQuestion.explanation}</p>
                  </div>
                )}

                {selectedAnswer && !showResult && (
                  <button onClick={handleNextQuestion} className="submit-button">
                    {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // COMPLETION VIEW - When quiz completed
  if (quizCompleted) {
    const totalPossibleScore = questionsDatabase[selectedTopic.name].reduce((sum, q) => sum + q.points, 0)
    const percentage = Math.round((score / totalPossibleScore) * 100)

    return (
      <div className="app-container">
        <div className="quiz-container">
          <div className="quiz-content">
            <div className="completion-card">
              <div className="completion-header">
                <span className="completion-emoji">🎉</span>
                <h2 className="completion-title">Quiz Completed!</h2>
              </div>
              
              <div className="completion-stats">
                <div className="stat-item">
                  <span className="stat-label">Your Score</span>
                  <span className="stat-value">{score}/{totalPossibleScore}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Percentage</span>
                  <span className="stat-value">{percentage}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Topic</span>
                  <span className="stat-value">{selectedTopic.name}</span>
                </div>
              </div>

              <div className="completion-actions">
                <button onClick={resetQuiz} className="action-button primary">Back to Topics</button>
                <button onClick={() => handleTopicSelect(selectedTopic)} className="action-button secondary">Try Again</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // MAIN HOME VIEW - Topic selection and code display
  return (
    <div className="app-container">
      <div className="header">
        <div className="header-top">
          <div>
            <h1 className="main-title">🧠 BrainTeaser Pro</h1>
            <p className="main-subtitle">Challenge your mind, earn dopamine hits! 🚀</p>
            <p className="main-description">Choose from 6 exciting categories and test your knowledge with engaging questions</p>
          </div>
          <button onClick={() => setShowCode(!showCode)} className="code-button">
            <Code size={18} />
            Code
          </button>
        </div>
      </div>

      {/* CODE VIEW */}
      {showCode && (
        <div className="code-view-container">
          <div className="code-view">
            <h2 className="code-view-title">📁 Complete Project Codebase</h2>
            [ALL FILES SHOWN HERE...]
          </div>
        </div>
      )}

      {/* TOPICS GRID */}
      <div className="topics-container">
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={topic.name} onClick={() => handleTopicSelect(topic)} className="topic-card">
              <div className="topic-icon-container">
                <span className="topic-emoji">{topic.emoji}</span>
                <div className="topic-icon-circle"><topic.icon /></div>
              </div>
              <div className="topic-content">
                <h3 className="topic-title">{topic.name}</h3>
                <p className="topic-description">{topic.description}</p>
                <p className="topic-questions">{questionsDatabase[topic.name]?.length || 0} Questions</p>
                <button className="topic-button">Start Quiz →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works">
          <div className="how-it-works-container">
            <h3 className="how-it-works-title">🎯 How It Works</h3>
            <div className="how-it-works-grid">
              <div className="how-it-works-item">
                <span className="how-it-works-emoji">📚</span>
                <h4 className="how-it-works-item-title">Choose Topic</h4>
                <p className="how-it-works-item-description">Select from 6 different categories with 5 questions each</p>
              </div>
              <div className="how-it-works-item">
                <span className="how-it-works-emoji">⏱️</span>
                <h4 className="how-it-works-item-title">Answer Questions</h4>
                <p className="how-it-works-item-description">Test your knowledge with carefully crafted questions</p>
              </div>
              <div className="how-it-works-item">
                <span className="how-it-works-emoji">🏆</span>
                <h4 className="how-it-works-item-title">Earn Points</h4>
                <p className="how-it-works-item-description">Get instant feedback and track your score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App