import React, { Component } from "react";
import logo from "./boy.png";
import cd from "./cd.png";
import playlist from "./songs/playlist.json";
import {
  TopContainer,
  BottomContainer,
  Logo,
  CdImg,
  Button,
  UnorderedList,
  Heading,
  Audio,
  DiscoGraphy,
  List,
  SongList,
  Details
} from "./components/Styling";

class App extends Component {
  state = {
    playlistData: playlist,
    selectedAlbumSongs: [],
    selectedAlbum: "",
    currentlyPlaying: ""
  };

  handleListen = (songs, name) => {
    this.setState({
      selectedAlbumSongs: songs,
      selectedAlbum: name
    });
  };

  handleSongSelection = song => {
    this.setState({
      currentlyPlaying: song
    });
  };

  render() {
    const {
      playlistData,
      selectedAlbumSongs,
      selectedAlbum,
      currentlyPlaying
    } = this.state;

    return (
      <>
        <TopContainer>
          <Logo src={logo} alt="" />
        </TopContainer>
        <BottomContainer>
          <CdImg src={cd} alt="" />
          <Heading>Now Playing</Heading>
          {currentlyPlaying ? (
            <audio controls autoPlay>
              <source src={currentlyPlaying} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          ) : (
            <Audio controls>
              <source src="" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </Audio>
          )}
          <DiscoGraphy>
            <h3>DiscoGraphy</h3>
            <UnorderedList>
              {playlistData.map((data, index) => {
                return (
                  <List key={index}>
                    {" "}
                    {data.album} = {data.release}
                    <Button>Buy</Button>
                    <Button
                      onClick={() => this.handleListen(data.songs, data.album)}
                    >
                      Listen
                    </Button>
                  </List>
                );
              })}
            </UnorderedList>
          </DiscoGraphy>
          <Details>
            <h3>{selectedAlbum}</h3>
            <UnorderedList>
              {selectedAlbumSongs && selectedAlbumSongs.length > 0 ? (
                <>
                  {selectedAlbumSongs.map((songs, index) => {
                    return (
                      <SongList
                        key={index}
                        onClick={() => this.handleSongSelection(songs.src)}
                      >
                        <span>
                          <i className="fa fa-play"></i>
                          {songs.name}
                        </span>
                      </SongList>
                    );
                  })}
                </>
              ) : null}
            </UnorderedList>
          </Details>
        </BottomContainer>
      </>
    );
  }
}

export default App;
