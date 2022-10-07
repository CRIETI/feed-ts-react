import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

import posts from './posts.json'

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.content}>
        <Sidebar/>

        {posts.map((post) => {
          return (
          <Post 
            key={post.id} 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )})}
      </div>
    </div>
  )
}

export default App
