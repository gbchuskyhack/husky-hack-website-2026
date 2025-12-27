type QuestionProps = {
  question: string;
  answer: string;
};

function Question({ question, answer }: QuestionProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

export default Question;
