import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

import profilePic from './assets/profile.jpg'

function App() {
  return (
    <>

      <Header isLoggedIn={true}  />
      <Card name="hyun" age={26} profilePic={profilePic}  />
      <Card />
      <Card />

      <Footer />
    </>
  );
}

export default App
