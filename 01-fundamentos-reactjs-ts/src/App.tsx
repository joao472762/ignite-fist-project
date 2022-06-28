import '../src/global/styles.css'
import styles from '../src/app.module.css'

import { Post } from './components/Posts'
import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'


const posts = [
  {
      id: 1,
        author: {
        avatarUrl: 'https://github.com/joao472762.png',
        name: 'Amanda Aguiar',
        role: 'Designer UI'
      },
    
      commentContent:[ 
         { type: 'paragraph',content: 'Fala galeraa 👋'},
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
         { type: 'link', content: 'jane.design/doctorcare'},
        
      ],
      publishedAt: new Date('2022-6-15 20:30:20')
  },
  {
    id: 2,
    author: {
    avatarUrl: 'https://github.com/gustavoguanabara.png',
    name: 'Lais',
    role: 'Matemática'
    },
    
    commentContent:[
       { type: 'paragraph',content: 'chama no truco'},
       { type: 'paragraph', content: 'Terminei um novo Projejo. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
       { type: 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2020-5-15 20:30:20')
}
]


function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        
        <main>
         { posts.map(post =>{
            return(
              <Post
                key= {post.id}
                Post = {post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
//default export
