import React, { useState } from 'react';

type Question = {
  id: number;
  text: string;
};

const questions: Question[] = [
  { id: 1, text: "What is Title Insurance?" },
  { id: 2, text: "What are the types of Encumbrances?" },
  { id: 3, text: "What is Full Value Deed and Purchase Money DOT/Mortgage?" },
  { id: 4, text: "What is Fee Simple Interest?" },
  { id: 5, text: "What is HOA?" },
  { id: 6, text: "What is Lis Pendens?" },
  { id: 7, text: "What is foreclosure process and explain full process (Judicial/Non-Judicial?" },
  { id: 8, text: "What is Life Estate?" },
  { id: 9, text: "What is Probate?" },
  { id: 10, text: "What is Deed?" },
  { id: 11, text: "What is Legal Description?" },
  { id: 12, text: "What is All-inclusive Deed of Trust?" },
  { id: 13, text: "What is Assumption Agreement?" },
  { id: 14, text: "What is Notice of Default and Validity?" },
  { id: 15, text: "Types of property Liens and Personal Liens?" },
  { id: 16, text: "What is Property Index and General Index?" },
  { id: 17, text: "What is Reverse Mortgage?" },
  { id: 18, text: "What is an Easement and Types of Easements?" },
  { id: 19, text: "What is CC&Rs?" },
  { id: 20, text: "What is UCC?" },
  { id: 21, text: "What are the types of properties and explain differences between of all properties?" },
  { id: 22, text: "What is Subordination Agreement?" },
  { id: 23, text: "What is Assignment and Substitution of Trustee and who will execute these documents?" },
  { id: 24, text: "What is Bankruptcy?" },
  { id: 25, text: "What are GI liens and time lines for those liens?" },
];

export default function Assessment() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value.slice(0, 1000);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Here you would typically send the answers to a server
    console.log('Submitted answers:', answers);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Assessment</h1>
          {!submitted ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h2>
                <p className="text-lg text-blue-900">{questions[currentQuestionIndex].text}</p>
              </div>
              <textarea
                value={answers[currentQuestionIndex]}
                onChange={handleAnswerChange}
                placeholder="Type your answer here."
                className="w-full h-48 p-4 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                maxLength={1000}
              />
              <div className="mt-2 text-right text-blue-600">
                {answers[currentQuestionIndex].length}/1000 characters
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                >
                  Previous
                </button>
                {currentQuestionIndex === questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Assessment Completed!</h2>
              <p className="text-lg text-blue-700">Thank you for completing the assessment.</p>
              <p className="text-md text-blue-600 mt-2">Your answers have been submitted successfully.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}