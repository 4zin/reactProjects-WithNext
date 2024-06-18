import { Button } from "@mui/material";
import useQuestionsData from "../hooks/useQuestionsData";
import { useQuestionStore } from "../store/questions";

export default function Footer() {
  const { correct, incorrect, unanswered } = useQuestionsData();

  const reset = useQuestionStore((state) => state.reset);

  return (
    <footer className="flex flex-col">
      <strong>{`✅${correct} correctas - ❌${incorrect} incorrectas - ❓${unanswered} sin responder`}</strong>
      <Button onClick={() => reset()} variant="outlined">
        Reiniciar
      </Button>
    </footer>
  );
}
