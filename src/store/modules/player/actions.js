export function loadSong(song, list) {
  return {
    type: '@Player/LOAD',
    song,
    list,
  };
}

export function play() {
  return {
    type: '@Player/PLAY',
  };
}

export function pause() {
  return {
    type: '@Player/PAUSE',
  };
}

export function next() {
  return {
    type: '@Player/NEXT',
  };
}

export function prev() {
  return {
    type: '@Player/PREV',
  };
}

export function playing({ position, duration }) {
  return {
    type: '@Player/PLAYING',
    position,
    duration,
  };
}

export function handlePosition(percent) {
  return {
    type: '@Player/HANDLE_POSITION',
    percent,
  };
}

export function setPosition(percent) {
  return {
    type: '@Player/SET_POSITION',
    percent,
  };
}

export function setVolume(volume) {
  return {
    type: '@Player/SET_VOLUME',
    volume,
  };
}
