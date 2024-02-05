import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/howtrojan.png",
      name: "André Santos Braga",
      role: "Front End Developer"
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋' },     
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
      {type: 'paragraph', content:'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},    
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-02-05 10:24:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋' },     
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
      {type: 'paragraph', content:'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},    
      {type: 'paragraph', link:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-02-10 10:24:00'),
  }

];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
           return (<Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}   
           />)
          } )}
        </main>
      </div>
    </>
  );
}

export default App;
