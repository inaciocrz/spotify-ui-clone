import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  border-radius: 6px;
  background-color: #181818;
  min-width: 150px;

  transition: background-color 0.1s ease;

  &:hover {
    background-color: #282828;
    .play-button {
      opacity: 1;
      bottom: 16px;
    }
  }

  cursor: pointer;
  user-select: none;
`;

export const CardImage = styled.div<{ rounded: boolean }>`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: ${({ rounded }) => (rounded ? "50%" : "4px")};
  }
  .play-button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;

    bottom: 8px;
    right: 8px;

    border-radius: 50%;
    background-color: #1fdf64;
    opacity: 0;

    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.7);

    transition: all 0.3s ease;

    svg {
      height: 24px;
      color: black;
      transform: translateX(10%);
    }

    &:hover {
      transform: scale(1.07);
    }
  }
  margin-bottom: 16px;
`;

export const CardInfo = styled.div`
  min-height: 62px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.base};
`;

export const Description = styled.div`
  font-size: 0.875rem;

  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
