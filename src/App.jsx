
import './App.css'
import { searchWikiTitles } from './api/wiki'

function App() {

  return (
    <div className='app'>
      <h1>위키백과 검색</h1>
      <div className='search'><input type='text' placeholder='검색어를 입력하세요' /><button>검색</button></div>
      <ul>
        <li>
          <div>
            <strong>제목</strong>
            <p>설명</p>
            <a href='#'>위키에서 보기</a>
          </div>
        </li>
      </ul>

    </div>

  )
}

export default App
