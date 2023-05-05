import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Handle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  height: 32px;

  padding: 2px;
  border-radius: 500px;
  border: none;

  background-color: rgba(0, 0, 0, 0.7);

  color: ${({ theme }) => theme.colors.text.base};
  cursor: pointer;

  &:hover {
    background-color: #282828;
  }

  img {
    height: 100%;
    border-radius: 50%;
  }

  span {
    font-size: 0.875rem;
  }

  svg {
    height: 14px;
    margin-right: 6px;
  }
`;

export const Content = styled.div``;
