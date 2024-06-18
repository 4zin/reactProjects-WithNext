import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import SyntaxtHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useQuestionStore } from "../store/questions";
import { type Question as QuestionType } from "../types";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Footer from "./Footer";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;
  // usuario no ha seleccionado nada todavía
  if (userSelectedAnswer == null) return "transparent";
  // si ya seleccionó pero la respuesta es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return "transparent";
  // si la respuesta es correcta
  if (index === correctAnswer) return "green";
  // selección del usuario pero incorrecta
  if (index === userSelectedAnswer) return "red";
  // si no es ninguna de las anteriores
  return "transparent";
};

function Question({ info }: { info: QuestionType }) {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: "#222", p: 2 }}>
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxtHighLighter language="javascript" style={dracula}>
        {info.code}
      </SyntaxtHighLighter>

      <List sx={{ bgcolor: "#333", marginTop: 2 }}>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={handleClick(index)}
              sx={{ bgcolor: getBackgroundColor(info, index) }}
            >
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default function Game() {
  const questions = useQuestionStore((state) => state.questions);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  return (
    <section className="flex flex-col h-[35rem] justify-center items-center">
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIos />
        </IconButton>
        {currentQuestion + 1}/{questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </section>
  );
}
