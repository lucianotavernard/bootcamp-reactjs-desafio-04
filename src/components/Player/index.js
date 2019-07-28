import React, { useMemo } from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { useSelector, useDispatch } from 'react-redux';
import {
  play,
  pause,
  next,
  prev,
  playing,
  handlePosition,
  setPosition,
  setVolume,
} from '../../store/modules/player/actions';

import {
  Container, Current, Progress, Controls, Time, ProgressSlider, Volume,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

import { msToTime } from '../../util/format';

export default function Player() {
  const player = useSelector(state => state.player);

  const dispatch = useDispatch();

  function handlePlayClick() {
    dispatch(play());
  }

  function handlePauseClick() {
    dispatch(pause());
  }

  function handleNextClick() {
    dispatch(next());
  }

  function handlePrevClick() {
    dispatch(prev());
  }

  function handlePlayingChange({ position, duration }) {
    dispatch(playing({ position, duration }));
  }

  function handlePositionChange(value) {
    dispatch(handlePosition(value / 1000));
  }

  function handlePositionAfterChange(value) {
    dispatch(setPosition(value / 1000));
  }

  function handleSetVolume(value) {
    dispatch(setVolume(value));
  }

  const [position, duration, positionShown, progress] = useMemo(
    () => [
      msToTime(player.position),
      msToTime(player.duration),
      msToTime(player.positionShown),
      parseInt((player.positionShown || player.position) * (1000 / player.duration), 10) || 0,
    ],
    [player],
  );

  return (
    <Container>
      {!!player.currentSong && (
        <Sound
          url={player.currentSong.file}
          playStatus={player.status}
          onFinishedPlaying={handleNextClick}
          onPlaying={handlePlayingChange}
          position={player.position}
          volume={player.volume}
        />
      )}

      <Current>
        {!!player.currentSong && (
          <>
            <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />

            <div>
              <span>{player.currentSong.title}</span>
              <small>{player.currentSong.author}</small>
            </div>
          </>
        )}
      </Current>

      <Progress>
        <Controls>
          <button type="button">
            <img src={ShuffleIcon} alt="Shuffle" />
          </button>
          <button type="button" onClick={handlePrevClick}>
            <img src={BackwardIcon} alt="Backward" />
          </button>

          {!!player.currentSong && player.status === Sound.status.PLAYING ? (
            <button type="button" onClick={handlePauseClick}>
              <img src={PauseIcon} alt="Pause" />
            </button>
          ) : (
            <button type="button" onClick={handlePlayClick}>
              <img src={PlayIcon} alt="Play" />
            </button>
          )}

          <button type="button" onClick={handleNextClick}>
            <img src={ForwardIcon} alt="Forward" />
          </button>
          <button type="button">
            <img src={RepeatIcon} alt="Repeat" />
          </button>
        </Controls>

        <Time>
          <span>{positionShown || position}</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ border: 0 }}
              max={1000}
              onChange={handlePositionChange}
              onAfterChange={handlePositionAfterChange}
              value={progress}
            />
          </ProgressSlider>
          <span>{duration}</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          value={player.volume}
          onChange={handleSetVolume}
        />
      </Volume>
    </Container>
  );
}
