import Image from "next/Image"

const StoryCard = ({ name, src, profile }) => {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
            <img
                loading="lazy"
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 object-cover"
                src={profile}
                width={100}
                height={100}
                layout="fixed"
                alt="profile photo"
            />
            <img
                loading="lazy"
                className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
                alt="stories photo"
            />
            <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-sm font-bold truncate">{name}</p>
        </div>
    )
}

export default StoryCard
