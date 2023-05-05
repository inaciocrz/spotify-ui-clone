import React from "react";
import { Container } from "./styles";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import PlayerBar from "./PlayerBar";
import MainView from "./MainView";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <Container>
      <TopBar />
      <NavBar />
      <MainView>{children}</MainView>
      <PlayerBar />
    </Container>
  );
}
