import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Section = styled.section<{ columnCount: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-bottom: 16px;

  .headings {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }
    .show-all {
      font-size: 0.875rem;
      font-weight: bold;
      color: #b3b3b3;
    }

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(${({ columnCount }) => columnCount}, 1fr);
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    grid-column-gap: 24px;
    overflow-y: hidden;
  }
`;
