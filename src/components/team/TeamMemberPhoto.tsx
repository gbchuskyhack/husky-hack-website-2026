
interface TeamMemberPhotoProps {
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
    className?: string;
}

export default function TeamMemberPhoto({ mainProfilePicturePath, secondaryProfilePicturePath, className = "w-24 h-24" }: TeamMemberPhotoProps) {
    return (
        <>
            {mainProfilePicturePath || secondaryProfilePicturePath ? (
                <div className={`relative bg-gray-200 overflow-hidden rounded-full ${className}`}>
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                        style={{
                            backgroundImage: `url(${mainProfilePicturePath || secondaryProfilePicturePath})`,
                        }}
                    />
                    {mainProfilePicturePath && secondaryProfilePicturePath && (
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                backgroundImage: `url(${secondaryProfilePicturePath})`,
                            }}
                        />
                    )}
                </div>
            ) : (
                <div className={`bg-gray-100 flex items-center justify-center rounded-full ${className}`}>
                    <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
        </>
    );
}
