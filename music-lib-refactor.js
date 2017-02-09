var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printTracks: function () {
    for (var tId in this.tracks) {
      var trackId = this.tracks[tId]['id'];
      //console.log(playlistId);
      var trackName = this.tracks[tId]['name'];
      var trackArtist = this.tracks[tId]['artist'];
      var trackAlbum = this.tracks[tId]['album'];
      //console.log(totalTracks);
      console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
    }
  },

  printPlaylists: function () {
    for (var pId in this.playlists) {
      var playlistId = this.playlists[pId]['id'];
      //console.log(playlistId);
      var playlistName = this.playlists[pId]['name'];
      var totalTracks = this.playlists[pId]['tracks'].length;
      //console.log(totalTracks);
      console.log(playlistId + ": " + playlistName + " - " + totalTracks + " tracks");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    playlistId['tracks'].push(trackId['id']);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var id = this.uid();
    library['tracks'][id] = {id: id, name: name, artist: artist, album: album };
  },

  addPlaylist: function (name) {
    var id = this.uid();
    library['playlists'][id] = {id: id, name: name}
  }
}

// var trackId = library['tracks']['t01'];
// var playlistId = library['playlists']['p02'];
//library.printTracks();

//library.printPlaylists();

/*library.addTrackToPlaylist(trackId, playlistId);
console.log(playlistId);*/

/*library.addTrack('hello', 'jon', 'lalala');
console.log(library.tracks);*/

/*library.addPlaylist('hello');
console.log(library.playlists);*/

