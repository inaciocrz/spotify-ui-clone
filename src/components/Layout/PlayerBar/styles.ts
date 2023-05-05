import styled from "styled-components";

export const Container = styled.div`
  grid-area: now-playing-bar;

  display: flex;
  align-items: center;

  height: 91px;
  border-top: 1px solid #282828;
  padding: 0 16px;

  background-color: #181818;

  > div {
    flex: 1;
  }
`;

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    height: 24px;
    color: #5e5e5e;
  }

  > .controls {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  > .timeline {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    .time {
      font-size: 0.6875rem;
    }
    .line {
      flex: 1;
      height: 4px;
      width: 100%;
      border-radius: 2px;
      background-color: #5e5e5e;
    }
  }
`;

export const OtherControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    height: 24px;
    margin: 8px;
  }
`;
