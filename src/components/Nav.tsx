export default function NavBar() {
  return (
    <nav id="Home" className="sticky top-0 z-50 h-[10vh] backdrop-blur-lg border-b border-white/20 rounded-lg">
      <div className="px-10 w-full h-full">
        <div className="flex h-full items-center">
          <a href="../">
            <span className="font-bold whitespace-nowrap">Logo PlaceHolder</span>
          </a>

          <div className="flex flex-1 justify-evenly">
            <a href="#About-Us">About Us</a>
            <a href="#Schedule">Schedule</a>
            <a href="#Sponsor">Sponsor</a>
            <a href="#FAQ">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
