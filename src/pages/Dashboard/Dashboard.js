import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostCard from '../../components/postCard/PostCard';
import userPosts from '../../sampleData/userPost';
import OutlinedButton from '../../components/outlinedButton/OutlinedButton';

import { useNavigate } from 'react-router-dom';

const Dashboard = ({ route }) => {
  const location = useLocation();
  const { username, email } = location.state || {};
  const postCount = 20;
  const draftCount = 10;
  const publishedCount = 15;
  const pageViews = 1000;
  const uniqueVisitors = 500;
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="md:float-leftex justify-between items-center mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome, {username}</h2>
          <p className="text-gray-600">Email: {email}</p>
        </div>
        <OutlinedButton text='Logout' onClick={() => navigate('/home')} className="bg-rose-600 text-white font-semibold py-2 px-4 rounded-lg" />
      </div>

      <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Your Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {userPosts.map((post, index) => (
        <PostCard
          key={index}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}
        
      </div>
    </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Blog Overview</h3>
          <p className="text-gray-600">Total Posts: <span className="font-bold text-gray-800">{postCount}</span></p>
          <p className="text-gray-600">Drafts: <span className="font-bold text-gray-800">{draftCount}</span></p>
          <p className="text-gray-600">Published Posts: <span className="font-bold text-gray-800">{publishedCount}</span></p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h3>
          <p className="text-gray-600">Page Views: <span className="font-bold text-gray-800">{pageViews}</span></p>
          <p className="text-gray-600">Unique Visitors: <span className="font-bold text-gray-800">{uniqueVisitors}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
