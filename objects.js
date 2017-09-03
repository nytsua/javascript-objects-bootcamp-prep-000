var playlist = {};
playlist['Of monsters and men'] = 'Little Talks';

function updatePlaylist(obj, artist, song){
  return Object.assign({}, obj, {artist: song});
}
