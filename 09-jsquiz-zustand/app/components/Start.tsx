import { Button } from "@mui/material";
import { useQuestionStore } from "../store/questions";

const LIMIT_QUESTIONS = 10;

export default function Start() {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestion);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <Button onClick={handleClick} variant="contained">
        Empezar!
      </Button>
    </main>
  );
}
