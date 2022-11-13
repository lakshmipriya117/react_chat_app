import React from 'react';
//import Footer from './Footer';
//front page

const style={
    div: `w-full text-xl p-3 bg-blue-900 text-white outline-none border-none`,
};
const Home = () => {
  return (
    <>
    <div className={style.div}>WELCOME TO MY CHAT</div>
    <h1>Sign in and Enjoy</h1>
    <img src="https://cdn.littlelines.com/assets/blog/multi-person-video-chat/littlechat-multi-person-video-chat-1d83c98287b25a715b52a5b3e9c4326923a3cc337aad4c2e419f50d60d42d40c.jpg"></img>
    {/* <Footer/> */}
    
    </>
  )
}

export default Home