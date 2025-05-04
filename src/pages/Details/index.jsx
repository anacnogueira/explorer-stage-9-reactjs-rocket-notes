import { Container } from "./styles";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <span>Ana Claudia Nogueira</span>
      <Button title="Login" />
      <Button title="Entrar" />
      <Button title="Cadastrar" />
    </Container>
  );
}
