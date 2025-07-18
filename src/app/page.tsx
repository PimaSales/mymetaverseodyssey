export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <img
  src="/assets/background.jpg"
  alt="My Metaverse Odyssey"
  className="w-full h-full object-contain object-center scale-90"
/>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white text-sm px-4">
        <p className="bg-black/60 px-4 py-2 rounded-lg">
          Coming soon — <strong>My Metaverse Odyssey™</strong>: Home to all avatars.<br />
          <span className="text-xs text-gray-300">© 2025 My Metaverse Odyssey. All rights reserved.</span>
        </p>
      </div>
    </div>
  );
}
