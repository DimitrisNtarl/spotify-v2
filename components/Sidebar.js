import Image from "next/image";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col py-4 items-center bg-transparent w-[150px] h-screen space-y-8">
      <Image
        src="/spotify_icon.png"
        alt="spotify icon"
        width={70}
        height={70}
        style={{ objectFit: "contain" }}
        className="animate-pulse"
      />
    </section>
  );
}

export default Sidebar;
