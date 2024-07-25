const PostCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default PostCard;