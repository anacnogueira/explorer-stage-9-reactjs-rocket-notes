import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao Nodejs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            iste nesciunt doloremque similique facilis labore dolore sunt? Ex
            dolor sint consectetur repudiandae deserunt est doloribus
            cupiditate, nam, sequi consequuntur cumque.
          </p>
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
        </Content>
      </main>
    </Container>
  );
}
