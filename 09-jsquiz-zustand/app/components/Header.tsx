import { Container, Stack, Typography } from "@mui/material";
import JavaScriptLogo from "./JavaScriptLogo";

export default function Header() {
  return (
    <header>
      <Container>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h4">JavaScript quizz</Typography>
        </Stack>
      </Container>
    </header>
  );
}
