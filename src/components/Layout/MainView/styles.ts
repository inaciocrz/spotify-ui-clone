import styled from "styled-components";

export const Container = styled.div`
  grid-area: main-view;
  position: relative;
  max-height: calc(100vh - 90px);
  overflow-y: auto;

  padding: calc(64px + 24px) 32px 0;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #5e5e5e;
    transition: background-color 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #8e8e8e;
  }

  .main {
    position: relative;
    z-index: 10;
  }

  .gradient {
    position: absolute;
    left: 0;
    top: 0;
    height: 332px;
    width: 100%;
    margin-top: -64px;
    background-color: rgb(83, 83, 83);
    background-image: ${({ theme }) =>
      `linear-gradient(rgba(0,0,0,.6) 0, ${theme.colors.bg.base} 100%)`};
  }
`;
