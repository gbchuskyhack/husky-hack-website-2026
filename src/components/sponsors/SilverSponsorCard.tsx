type SilverSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  borderColour: string;
  link: string;
};

function SilverSponsorCard({
  title,
  sponsorLogo,
  borderColour,
  link,
}: SilverSponsorCardProps) {
  return (
    <a href={link} target="_blank">
      <div
        className="
          flex flex-col items-center justify-center
          rounded-md bg-[#434343]
          h-[20vh] w-[22vw] p-5 grayscale opacity-90
          transition duration-300 hover:grayscale-0 hover:opacity-100
        "
        style={{ border: `2px solid ${borderColour}` }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src={sponsorLogo}
            alt={`Brand logo for ${title}`}
            className="max-h-[18vh] object-contain"
          />
        </div>
      </div>
    </a>
  );
}

export default SilverSponsorCard;
