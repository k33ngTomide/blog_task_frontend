import React from 'react';
import samplePosts from '../../sampleData/samplePosts'
import PostCard from '../../components/postCard/PostCard';



const FeaturedPosts = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {samplePosts.map((post, index) => (
        <PostCard
          key={index}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}
        
      </div>
    </section>
  );
};

export default FeaturedPosts