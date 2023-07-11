import Image from "next/image";

function Loader() {
  return (
    <div className="pt-60 flex flex-col items-center space-y-4 h-screen">
      <span className="relative ">
        <Image
          src="/spotify_logo.png"
          height={250}
          width={800}
          style={{ objectFit: "contain" }}
          className="animate-pulse"
        />
      </span>
    </div>
  );
}

export default Loader;
