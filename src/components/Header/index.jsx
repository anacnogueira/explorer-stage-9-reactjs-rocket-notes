import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/anacnogueira.png" alt="Foto do usuário" />
        <div>
          <span>Bem Vinda</span>
          <strong>Ana Claudia Nogueira</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
