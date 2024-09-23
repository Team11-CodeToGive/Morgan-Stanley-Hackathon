import { useEffect, useState } from 'react';
import CommunityListItem from './CommunityListItem';
import CreateEventButton from './CreateEventButton';
const initCommunities = [
    {
        "community_id": 11,
        "created_at": "2024-09-23T04:23:54.497977+00:00",
        "description": "A community-based chess club that travels to different locations to play. Our mission is to inspire more people to play chess over the board, whether they've played for years or have never played before. Weekly OTB (Over the board) games, socials and special events!\n\nExplore: Our chess club is all about exploring new places, new opponents, and new strategies. We believe that by venturing out and trying new things, we’ll continue to grow and improve as people and players.\n\nPlay: Chess is a game of strategy and skill, and we believe in playing to win. Playing to your strengths can not only improve your skills in game but also in life.\n\nLive: For us, chess is more than just a game - it's a lifestyle. By embracing the lessons and values of the game, we strive to live our lives with integrity, focus, and determination.\n\nLearn more about us:\nhttps://www.chess.com/join/traveling-chess-club\nhttps://www.instagram.com/travelingchessclub/\nhttps://linktr.ee/travelingchess\n\nPlease note that Chess.com is not responsible for the organization, management, or conduct of any events or groups listed on Meetup including those under the Chess.com name. These events and groups are independently organized and managed by third parties. Chess.com does not control, supervise, or endorse any activities, actions, or statements made by event organizers or participants. Participation in these events and groups is entirely at the responsibility of the participant. Chess.com disclaims all liability for any injuries, damages, or losses that may occur during or as a result of participation in these events or groups, whether they are held in person, online, or at any specific venue.\n\nBecome a member of Chess.com Global Chess Community to connect with other chess enthusiasts all around the world. 1. Learn how to play chess; 2. Play games and tournaments online; 3. Get better at chess. 4. Attend in-person and online events, including exclusive watch parties and live chess events online. We have free and premium content, for players of all skill levels, from absolute beginner to master. \nHelp us build a great global chess community!",
        "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/chess.webp?t=2024-09-23T04%3A28%3A27.477Z",
        "members": null,
        "name": "Traveling Chess in Atlanta",
        "owner_id": 47
    },
    {
        "community_id": 12,
        "created_at": "2024-09-23T04:28:09.383142+00:00",
        "description": "Welcome to the Central Texas Fly Fishing Community! This group is dedicated to bringing together fly anglers of all levels to share their passion for fly fishing. Whether you’re a seasoned pro or just starting out, we welcome you to join us.\nOur goal is to build a friendly and welcoming community where individuals can build their angler network for times when they don’t want to fish alone. We offer a variety of events and activities to help you improve your skills and connect with other fly anglers. Our events include beginner classes, casting practice evenings, Workshops on the Water, fishing excursions throughout Central Texas to get on the water, virtual fly-tying nights, various speaking events, camping weekends and even trips out of state.\nJoin us for our next event and meet other fly anglers who share your passion for fly fishing!",
        "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/trek.webp?t=2024-09-23T04%3A32%3A53.466Z",
        "members": null,
        "name": "Fly Fishing Adventure Group",
        "owner_id": 48
    },
    {
        "community_id": 13,
        "created_at": "2024-09-23T04:30:22.399842+00:00",
        "description": "Welcome to The Reading Circle Book Club! This group is for book enthusiasts who love discussing and sharing their thoughts on various genres. Whether you're a casual reader or a bookworm looking to meet like-minded individuals, this is the perfect group for you. Join us for lively discussions, book swaps, and social gatherings centered around our love for books. Come ready to share your favorite reads and discover new ones with fellow book lovers. Let's embark on literary adventures together and connect through our shared passion for reading.",
        "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/book.webp?t=2024-09-23T04%3A35%3A08.316Z",
        "members": null,
        "name": "The Reading Circle Book Club",
        "owner_id": 41
    },
    {
        "community_id": 10,
        "created_at": "2024-09-23T04:16:51.897378+00:00",
        "description": "The mission of The Community Restoration Project  Corp (CRP) is to provide families and individuals the resources to live productive lives.\nThe programs offered by CRP ensure that families and individuals have the tools they need to make this possible.",
        "logo": "https://lxnzcyuzjvmdlgizhwwq.supabase.co/storage/v1/object/public/event-images/CRP%20logo.png?t=2024-09-23T04%3A21%3A33.016Z",
        "members": null,
        "name": "Community Restoration Project",
        "owner_id": 47
    }
]

export default function CommunityList() {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        async function fetchAndSetCommunities() {
            try {
                const fetchedCommunities = await fetchCommunities();
                setCommunities(fetchedCommunities);
            } catch (error) {
                console.error("Error fetching communities:", error);
            }
        }
        fetchAndSetCommunities();
    }, []);

    return (
        <div className="gap-4 grid w-full   min-h-[100px]">
            <h1 className="text-2xl font-semibold">Communities Hosting Events</h1>
            <div className='border-b border-1 border-gray-300 '></div>
            {communities.length === 0 ? (
                <div className="text-center">
                    <div className="text-xl w-full">No communities available</div>
                </div>
            ) : (
                <>
                    {communities.map((community, key) => (
                        <div key={community.community_id}>
                            <CommunityListItem
                                name={community.name}
                                description={community.description}
                                logo={community.logo}
                                members={community.members}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

async function fetchCommunities() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const res = await fetch("https://my-project-1547014036843.uc.r.appspot.com/community", requestOptions);
    const data = await res.json();
    return data;
}
