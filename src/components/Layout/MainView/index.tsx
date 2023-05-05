import { Container } from "./styles";

interface IProps {
  children: React.ReactNode;
}

export default function MainView({ children }: IProps) {
  return (
    <Container id="main-view">
      <div className="gradient"></div>
      <div className="main">{children}</div>
    </Container>
  );
}
