import { playingTrackState } from "../atoms/playerAtom";
import SpotifyWebApi from "spotify-web-api-node";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Sidebar from "./Sidebar";
import Right from "./Right";
import Body from "./Body";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  const { data: session } = useSession();
  const { accessToken } = session;

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  return (
    <main className="flex min-h-screen min-w-max lg:pb-24">
      <div className="mr-14">
        <Sidebar />
      </div>
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      {showPlayer && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Player accessToken={accessToken} trackUri={playingTrack.uri} />
        </div>
      )}
    </main>
  );
}

export default Dashboard;
