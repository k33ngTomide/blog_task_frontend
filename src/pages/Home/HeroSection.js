// src/components/HeroSection/HeroSection.js

import React, { useState } from 'react';
import FilledButton from '../../components/filledButton/FilledButton';
import OutlinedButton from '../../components/outlinedButton/OutlinedButton';
import LoginForm from '../../components/loginForm/LoginForm';
import SignupForm from '../../components/signupForm/SignupForm';

const HeroSection = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleLoginPress = () => {
    setLoginOpen(true);
  };

  const handleSignUpPress = () => {
    setSignupOpen(true);
  };

  const handleClose = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <section className="bg-cover bg-center text-white py-32" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/black-carbon-fiber-texture-pattern-background_1017-33436.jpg?ga=GA1.1.1469465127.1721858089&semt=sph)' }}>
      <div className="container mx-auto text-center">
        <h1 className="md:text-6xl text-5xl font-bold">Welcome to CapsBlog</h1>
        <p className="md:text-lg text-sm mt-4">Discover insightful articles and inspiring stories.</p>
        <div className="mt-16">
          <FilledButton text="Explore Now" />
        </div>
        <div className="flex justify-center gap-16 mt-16">
          <OutlinedButton text="Sign Up" className={'md:px-24 md:text-3xl'} onClick={handleSignUpPress} />
          <FilledButton text="Login" className={'md:px-24 md:text-3xl'} onClick={handleLoginPress} />
        </div>
      </div>
      {isLoginOpen && <LoginForm onClose={handleClose} />}
      {isSignupOpen && <SignupForm onClose={handleClose} />}
    </section>
  );
};

export default HeroSection;
