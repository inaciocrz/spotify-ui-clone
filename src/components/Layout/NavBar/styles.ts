import styled from "styled-components";

export const Container = styled.nav`
  grid-area: nav-bar;
  display: flex;
  flex-direction: column;
  width: 241px;

  background-color: black;
`;

export const Logo = styled.div`
  padding: 24px;

  a {
    text-decoration: none;
  }

  svg {
    width: 100%;
    max-width: 131px;
    color: #fff;
  }
`;

export const MainMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SongsMenu = styled.div`
  flex: 1;
  margin-top: 24px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul.playlists-list {
    padding: 8px 0;
    li {
      padding: 0 24px;

      a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 32px;
        padding: 0;
        font-weight: 400;

        span {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        &:hover {
          color: white;
        }
      }
    }
  }

  hr {
    margin: 8px 24px 0 24px;
    height: 1px;
    border: none;
    background-color: ${({ theme }) => theme.colors.bg.divider};
  }

  .heart-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 2px;

    background: linear-gradient(135deg, #450af5, #c4efd9);
    filter: brightness(0.7);
    > svg {
      height: 14px;
      color: white;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 40px;
  padding: 0 24px;

  font-size: 0.875rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;

  transition: color 0.2s ease;

  &:hover {
    color: white;
    .heart-icon {
      filter: brightness(1);
    }
  }

  > svg {
    height: 24px;
  }
`;
