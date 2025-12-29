type BronzeSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  borderColour: string;
  link:string;
};

function BronzeSponsorCard({
  title,
  sponsorLogo,
  borderColour,
  link,
}: BronzeSponsorCardProps) {
  return (
    <a href={link} target="_blank">
      <div
        className="
          flex flex-col items-center justify-center
          rounded-md bg-[#434343]
          h-[15vh] w-[18vw]
          p-4
          grayscale opacity-90
          transition duration-300
          hover:grayscale-0 hover:opacity-100
        "
        style={{ border: `2px solid ${borderColour}` }}>
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src={sponsorLogo}
            alt={`Brand logo for ${title}`}
            className="max-h-[12vh] max-w-[15vh] object-contain"
          />
        </div>
      </div>
    </a>
  );
}

export default BronzeSponsorCard;
