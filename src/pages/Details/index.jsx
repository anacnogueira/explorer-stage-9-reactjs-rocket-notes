import { Container, Links } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir Nota" />
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
      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
