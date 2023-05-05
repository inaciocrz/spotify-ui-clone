import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "nav-bar top-bar"
    "nav-bar main-view"
    "now-playing-bar now-playing-bar";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.bg.base};
`;
