import { Container, PlayerControls, OtherControls } from "./styles";
import {
  ArrowShuffle,
  PlaySkipBack,
  PlaySkipForward,
  PauseCircle,
  Repeat,
  QueueMusic,
  VolumeHigh,
  Devices,
} from "../../icons";

export default function PlayerBar() {
  return (
    <Container>
      <div></div>
      <PlayerControls>
        <div className="controls">
          <ArrowShuffle />
          <PlaySkipBack />
          <PauseCircle style={{ height: "40px" }} />
          <PlaySkipForward />
          <Repeat />
        </div>
        <div className="timeline">
          <div className="current-time time">-:--</div>
          <div className="line"></div>
          <div className="duration-time time">-:--</div>
        </div>
      </PlayerControls>
      <OtherControls>
        <QueueMusic />
        <Devices />
        <VolumeHigh />
      </OtherControls>
    </Container>
  );
}
