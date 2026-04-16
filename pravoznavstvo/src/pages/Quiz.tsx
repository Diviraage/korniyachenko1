import { useState } from "react";
import { quizQuestions } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from "lucide-react";
import { cn } from "@/lib/utils";

type QuizState = 'start' | 'playing' | 'results';

export default function Quiz() {
  const [gameState, setGameState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (isAnswerChecked) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setGameState('results');
    }
  };

  // 12 point scale conversion based on percentage
  const percentage = (score / quizQuestions.length) * 100;
  const schoolGrade = Math.round((percentage / 100) * 12);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh] flex flex-col items-center justify-center">
      
      <AnimatePresence mode="wait">
        
        {/* START SCREEN */}
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center w-full bg-card p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/30">
              <HelpCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold mb-4">Підсумковий Тест</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Перевір свої знання з основ теорії держави і права. 
              <br/>Тест містить {quizQuestions.length} запитань.
            </p>
            <button
              onClick={handleStart}
              className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Розпочати тестування
            </button>
          </motion.div>
        )}

        {/* PLAYING SCREEN */}
        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-bold text-slate-500 mb-2">
                <span>Питання {currentQuestionIndex + 1} з {quizQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
                  animate={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="bg-card rounded-3xl shadow-lg border border-slate-100 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-snug">
                {currentQuestion.question}
              </h2>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  
                  // Determine styles based on state
                  let btnStyle = "bg-white border-2 border-slate-200 hover:border-primary/50 text-slate-700";
                  let icon = null;

                  if (selectedAnswer === index) {
                    btnStyle = "bg-primary/5 border-2 border-primary text-primary font-bold";
                  }

                  if (isAnswerChecked) {
                    if (index === currentQuestion.correctAnswer) {
                      btnStyle = "bg-emerald-50 border-2 border-emerald-500 text-emerald-800 font-bold";
                      icon = <CheckCircle2 className="w-6 h-6 text-emerald-500" />;
                    } else if (selectedAnswer === index) {
                      btnStyle = "bg-red-50 border-2 border-red-500 text-red-800 font-bold";
                      icon = <XCircle className="w-6 h-6 text-red-500" />;
                    } else {
                      btnStyle = "bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswerChecked}
                      className={cn(
                        "w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between",
                        btnStyle
                      )}
                    >
                      <span className="text-lg">{option}</span>
                      {icon}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {isAnswerChecked && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-2">Пояснення:</h4>
                      <p className="text-slate-600">{currentQuestion.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-10 flex justify-end">
                {!isAnswerChecked ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={selectedAnswer === null}
                    className="px-8 py-4 rounded-xl font-bold bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
                  >
                    Відповісти
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-8 py-4 rounded-xl font-bold bg-foreground text-white shadow-md hover:shadow-lg hover:bg-slate-800 transition-all flex items-center gap-2"
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? "Наступне питання" : "Завершити тест"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* RESULTS SCREEN */}
        {gameState === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center w-full bg-card p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-secondary to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
              <Award className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl font-extrabold mb-2">Тест завершено!</h2>
            <p className="text-xl text-muted-foreground mb-8">Твій результат:</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 min-w-[200px]">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Правильно</p>
                <p className="text-5xl font-black text-primary">{score}<span className="text-2xl text-slate-400">/{quizQuestions.length}</span></p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 min-w-[200px]">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Оцінка (12б)</p>
                <p className="text-5xl font-black text-secondary">{schoolGrade}<span className="text-2xl text-slate-400">/12</span></p>
              </div>
            </div>

            <button
              onClick={handleStart}
              className="px-8 py-4 rounded-xl font-bold text-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              Пройти ще раз
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
