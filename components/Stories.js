import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Dhwaj Sharma",
        src: "https://images.unsplash.com/photo-1629051255944-b4e56fa5781e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        profile: "https://pbs.twimg.com/profile_images/1426990037019684867/3AEe0qpO_400x400.jpg",
    },
    {
        name: "Elon Musk",
        src: "https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80",
        profile: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
    },
    {
        name: "Jeff Bezos",
        src: "https://www.rollingstone.com/wp-content/uploads/2018/06/jeff-bezos-richest-man-2018-read-7977aa13-c046-420a-b20d-c9bf45ab8ec0.jpg?resize=1800,1200&w=1800",
        profile: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHe1Y3DC0V3U/v1/1000x-1.jpg",
        profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    {
        name: "Bill Gates",
        src: "https://images.wsj.net/im-299011/square",
        profile: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
    },

]

const Stories = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story, i) => (
                <StoryCard key={i} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
