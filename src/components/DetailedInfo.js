import React, { useState } from "react";
import {
  Button,
  UnorderedList,
  DiscoGraphy,
  List,
  SongList,
  Details,
  Audio
} from "./Styling";
import playlist from "../songs/playlist.json";

const DetailedInfo = () => {
  const [albumState, handleListen] = useState({
    selectedAlbumSongs: [],
    selectedAlbum: null
  });

  const [currentlyPlaying, handleSongSelection] = useState(0);

  const { selectedAlbumSongs, selectedAlbum } = albumState;
  return (
    <>
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
          {playlist.map((data, index) => {
            let songs = data.songs;
            let album = data.album;
            return (
              <List key={index}>
                {" "}
                {album} = {data.release}
                <Button>Buy</Button>
                <Button
                  onClick={() =>
                    handleListen({
                      selectedAlbumSongs: songs,
                      selectedAlbum: album
                    })
                  }
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
                    onClick={() => handleSongSelection(songs.src)}
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
    </>
  );
};

export default DetailedInfo;
