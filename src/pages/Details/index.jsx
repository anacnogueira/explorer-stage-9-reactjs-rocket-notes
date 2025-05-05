import { Container, Links } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links Uteis">
        <Links>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
