import { useState } from "react";
import data from "./data";
import Question from "./Questions";
import "./fonts/AeonikTRIAL-Regular.otf"
const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Question questions={questions} />
    </main>
  );
};


export default App;
