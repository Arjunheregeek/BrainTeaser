import React, { useState } from 'react'
import { Calculator, Globe, Brain, Beaker, Clock, MapPin, Code } from 'lucide-react'

const topics = [
  { 
    name: 'Mental Math', 
    icon: Calculator, 
    emoji: '🧮',
    description: 'Test your quick calculation skills with fun math problems'
  },
  { 
    name: 'Current Affairs', 
    icon: Globe, 
    emoji: '🌍',
    description: 'Stay updated with recent news and world events'
  },
  { 
    name: 'General Knowledge', 
    icon: Brain, 
    emoji: '🧠',
    description: 'Challenge yourself with mixed trivia and interesting facts'
  },
  { 
    name: 'Science', 
    icon: Beaker, 
    emoji: '⚗️',
    description: 'Explore physics, chemistry, and biology concepts'
  },
  { 
    name: 'History', 
    icon: Clock, 
    emoji: '⏰',
    description: 'Journey through historical events and famous figures'
  },
  { 
    name: 'Geography', 
    icon: MapPin, 
    emoji: '📍',
    description: 'Discover countries, capitals, and geographical wonders'
  }
]

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showCode, setShowCode] = useState(false)

  if (selectedTopic) {
    return (
      <div className="app-container">
        <div className="quiz-container">
          <div className="quiz-content">
            <button 
              onClick={() => setSelectedTopic(null)}
              className="back-button"
            >
              ← Back to Topics
            </button>
            
            <div className="quiz-card">
              <div className="quiz-header">
                <span className="quiz-emoji">{selectedTopic.emoji}</span>
                <h2 className="quiz-title">{selectedTopic.name} Quiz</h2>
              </div>
              
              <div className="question-container">
                <h3 className="question-title">Sample Question:</h3>
                <p className="question-text">What is 15 × 7?</p>
                <div className="options-grid">
                  <button className="option-button">A) 105</button>
                  <button className="option-button">B) 95</button>
                  <button className="option-button">C) 115</button>
                  <button className="option-button">D) 85</button>
                </div>
              </div>
              
              <div className="quiz-footer">
                Full quiz functionality with 30 questions coming soon!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      {/* Header with Code button */}
      <div className="header">
        <div className="header-top">
          <div>
            <h1 className="main-title">🧠 BrainTeaser Pro</h1>
            <p className="main-subtitle">Challenge your mind, earn dopamine hits! 🚀</p>
            <p className="main-description">
              Choose from 6 exciting categories and test your knowledge with engaging questions
            </p>
          </div>
          <button 
            onClick={() => setShowCode(!showCode)}
            className="code-button"
          >
            <Code size={18} />
            Code
          </button>
        </div>
      </div>

      {/* Rest of component... */}
    </div>
  )
}

export default App
