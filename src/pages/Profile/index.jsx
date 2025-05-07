import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
      <Form>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value="Ana Claudia Nogueira"
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value="anacnogueira@gmail.com"
        />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
