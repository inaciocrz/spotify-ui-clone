import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px 0 40px;

  .main {
    display: flex;
    margin-bottom: 40px;
    .infos {
      display: flex;
      gap: 24px;
      flex: 1;

      > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 204px;

        h2 {
          font-size: 1rem;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.text.base};
        }

        a {
          color: ${({ theme }) => theme.colors.text.subdued};
          font-weight: 300;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .socials {
      display: flex;
      gap: 16px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 40px;
        height: 40px;

        border-radius: 50%;
        background-color: #292929;

        svg {
          height: 20px;
          color: white;
        }

        &:hover {
          background-color: #727272;
        }
      }
    }
  }
  .policies {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.colors.bg.divider};
    padding-top: 40px;

    font-size: 0.875rem;
    font-weight: 300;

    .links {
      display: flex;
      gap: 16px;

      a {
        color: ${({ theme }) => theme.colors.text.subdued};
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .copyrights {
    }
  }
`;
