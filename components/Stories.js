import StoryCard from "./StoryCard";


const stories = [
    {
        name: "Dhwaj Sharma",
        src: "https://images.unsplash.com/photo-1629051255944-b4e56fa5781e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        profile: "https://pbs.twimg.com/profile_images/1426990037019684867/3AEe0qpO_400x400.jpg",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zukerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}

        </div>
    )
}

export default Stories
