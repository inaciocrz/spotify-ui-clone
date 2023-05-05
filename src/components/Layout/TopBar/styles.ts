import styled from "styled-components";

export const Container = styled.header<{ opacity: number }>`
  position: fixed;
  grid-area: top-bar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 64px;
  width: calc(100% - 241px);
  margin-left: 241px;

  background-color: rgba(7, 7, 7, ${({ opacity }) => opacity});

  z-index: 11;
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 8px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: rgba(0, 0, 0, 0.7);

    color: white;
    svg {
      height: 18px;
    }
  }
`;

export const UserMenu = styled.div`
  display: flex;
  gap: 8px;

  .upgrade-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;

    padding: 0 15px;
    border: 1px solid ${({ theme }) => theme.colors.essential.subdued};
    border-radius: 500px;

    color: ${({ theme }) => theme.colors.text.base};
    font-weight: 400;
    background-color: transparent;

    cursor: pointer;

    &:hover {
      font-weight: bold;
      transform: scale(1.04);
      border-color: ${({ theme }) => theme.colors.essential.base};
    }
  }
`;
