import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import Search from 'routes/Search'
import Header from './Search/Header/Header'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
