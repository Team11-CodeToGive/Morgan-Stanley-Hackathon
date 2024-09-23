
const CommunityCard = ({ name, description, logo, members }) => {
    return (
        <div className=" relative rounded overflow-hidden">
            <img className="w-full group-hover:h-24 h-28 object-cover " src={logo} alt={name} />
            <div className="absolute inset-0 flex flex-col  transition duration-500 justify-center items-center  hover:bg-opacity-30 bg-black bg-opacity-50 text-white p-4">
                <h2 className="font-bold text-lg mb-2 ">{name}</h2>
                {/* <p className="text-sm text-center">{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p> */}
                {/* <span className="text-sm">{members ? `${members} Members` : 'No member count available'}</span> */}
            </div>
        </div>
    );
};

export default CommunityCard;
