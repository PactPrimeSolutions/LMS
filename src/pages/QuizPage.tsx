import React, { useState, useEffect } from 'react';

type Answer = {
  id: number;
  text: string;
};

type Question = {
  id: number;
  text: string;
  answers: Answer[];
  correctAnswerId: number;
};

// Simulate fetching questions from an API
const fetchQuestions = (): Promise<Question[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          text: "What does CSS stand for?",
          answers: [
            { id: 1, text: "Computer Style Sheets" },
            { id: 2, text: "Creative Style Sheets" },
            { id: 3, text: "Cascading Style Sheets" },
            { id: 4, text: "Colorful Style Sheets" }
          ],
          correctAnswerId: 3
        },
        {
          id: 2,
          text: "Which of the following is NOT a JavaScript framework or library?",
          answers: [
            { id: 1, text: "React" },
            { id: 2, text: "Angular" },
            { id: 3, text: "Vue" },
            { id: 4, text: "Java" }
          ],
          correctAnswerId: 4
        },
        {
          id: 3,
          text: "What does the 'DOM' stand for in web development?",
          answers: [
            { id: 1, text: "Document Object Model" },
            { id: 2, text: "Data Object Model" },
            { id: 3, text: "Digital Ordinance Model" },
            { id: 4, text: "Distributed Object Management" }
          ],
          correctAnswerId: 1
        },
      ]);
    }, 1000); // Simulating network delay
  });
};

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions()
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load questions. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleAnswerSelect = (answerId: number) => {
    const correctAnswerId = questions[currentQuestionIndex].correctAnswerId;
    setSelectedAnswerId(answerId);
    setIsCorrect(answerId === correctAnswerId);
  };

  const handleNextQuestion = () => {
    setSelectedAnswerId(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">Frontend Development Quiz</h1>
          <p>Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-200 mb-10">
        <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">Frontend Development Quiz</h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-lg mt-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Frontend Development Quiz</h1>
        <h2 className="text-2xl font-bold mb-6 text-blue-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <h3 className="text-xl mb-4 font-semibold text-blue-700">{currentQuestion.text}</h3>
        <ul>
          {currentQuestion.answers.map((answer) => (
            <li
              key={answer.id}
              onClick={() => handleAnswerSelect(answer.id)}
              className={`py-3 px-5 mb-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out border ${
                selectedAnswerId === answer.id
                  ? isCorrect
                    ? 'bg-green-200 border-green-400'
                    : 'bg-red-200 border-red-400'
                  : 'bg-blue-100 hover:bg-blue-200 border-blue-300'
              }`}
            >
              {answer.text}
            </li>
          ))}
        </ul>
        {selectedAnswerId !== null && (
          <div className="mt-6">
            {isCorrect ? (
              <p className="text-green-600 font-semibold text-lg">Correct answer!</p>
            ) : (
              <p className="text-red-600 font-semibold text-lg">Wrong answer! Try Again</p>
            )}
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                disabled={!isCorrect} // Disable the button until the correct answer is chosen
                className={`mt-6 py-2 px-6 rounded-lg transition-all duration-200 ${
                  isCorrect
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
              >
                Next Question
              </button>
            ) : (
              <p className="mt-6 text-lg font-semibold text-blue-600">You have completed the quiz!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
