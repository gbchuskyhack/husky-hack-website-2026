export default function NavBar() {
  return (
    <nav className="bg-gray-100">
      <div className=" px-10 m-0 w-full">
        <div className="flex h-16 items-center">
          <span className="font-bold whitespace-nowrap">
            Logo PlaceHolder
          </span>

          <div className="flex flex-1 justify-evenly">
            <a href="#About">About Us</a>
            <a href="#Schedule">Schedule</a>
            <a href="#Sponsor">Sponsor</a>
            <a href="#FAQ">FAQ</a>
          </div>

        </div>
      </div>
    </nav>
  );
}
