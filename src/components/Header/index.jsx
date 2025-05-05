import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/anacnogueira.png" alt="Foto do usuário" />
        <div>
          <span>Bem Vinda</span>
          <strong>Ana Claudia Nogueira</strong>
        </div>
      </Profile>
    </Container>
  );
}
