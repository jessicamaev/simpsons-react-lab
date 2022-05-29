import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
        <div className="inner-wrapper">
          <div className="blog-container">
            <ProfileCard pic={homer} name='Homer Simpson' description='Loves donuts more than his family' email='homer@simpson.com' />
            <ProfileCard pic={lisa} name="Lisa Simpson" description='Amazing saxophone player' email='lisa@simpson.com' />
            <ProfileCard pic={bart} name="Bart Simpson" description='Is the eternal prankster' email='bart@simpson.com' />
            <ProfileCard pic={maggie} name="Maggie Simpson" description='Known to have murdered atleast one person' email='maggie@simpson.com' />
            <ProfileCard pic={marge} name="Marge Simpson" description='Marge is a role model' email='marge@simpson.com' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
