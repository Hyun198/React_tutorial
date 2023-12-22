import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import profilePic from './assets/profile.jpg'
import Component from './Component.jsx'

function App() {
  return (
    <>
      <Header isLoggedIn={true}  />
      <Card name="hyun" age={26} profilePic={profilePic}  />
      <Card />
      <Component/>
      <Footer />
    </>
  );
}

export default App
