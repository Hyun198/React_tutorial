import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'

import profilePic from './assets/profile.jpg'

function App() {
  return (
    <>
      <Header />
      <Card name="hyun" age={26} profilePic={profilePic}  />
      <Card />
      <Card />
      <Footer />
    </>
  );
}

export default App
