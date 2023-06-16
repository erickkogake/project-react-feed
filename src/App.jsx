import { Header } from "./components/Header"
import { Post } from "./post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>asdioaj</main>
      </div>
    
    </>
  )
}

export default App
