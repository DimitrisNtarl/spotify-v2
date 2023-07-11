import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ChevronDownIcon, ViewGridIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

function Right({ chooseTrack, spotifyApi }) {
  const { data: session } = useSession();
  const { accessToken } = session;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  // Recently Played Tracks...
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
      setRecentlyPlayed(
        res.body.items.map(({ track }) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section>
      <div
        className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1.5 pr-2 text-white w-full border-2 border-[#15883e] mt-5 mb-10"
        onClick={signOut}
      >
        <img
          className="rounded-full w-10 h-10 "
          src={session?.user.image}
          alt=""
        />
        <ChevronDownIcon className="h-5 w-5" />
        <h2>{session?.user.name}</h2>
      </div>

      {/* Recently Played Tracks */}
      <div className="bg-[#0C0C0C] border-2 border-[#15883e] py-6 px-10 rounded-xl space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold text-sm">Recently Played</h4>
          <ViewGridIcon className="text-[#686868] h-8" />
        </div>

        <div className="space-y-6 overflow-y-scroll overflow-x-hidden h-[400px] md:h-[550px] scrollbar-hide">
          {recentlyPlayed.map((track, index) => (
            <RecentlyPlayed
              key={index}
              track={track}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Right;
