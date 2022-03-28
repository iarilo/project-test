import { Routes, Route } from 'react-router-dom';
import { FanMain } from './layout/file-main';
import { FanHeader } from './layout/file-header';
import { FanFooter } from './layout/file-footer';

//стр. блог и переход по ней
import { FanHome } from './page/page-home';
import { FanAbout } from './page/page-about';
import { FanBlog } from './page/page-blog';
import { FanNotFoundPage } from './page/file-NotFoundPage';
import { FanPagePost } from './page/page-post';
import { FanPageComment } from './page/page-comment';

// авторизация
import { FanContext } from './registration/file-context';
import { FanWrapperLogo } from './registration/file-wrapper-logo';
import { FanLogo } from './registration/file-logo';


import './App.css';

function App() {
  return (
    <div className="App">
      <FanHeader />

      <FanContext>
        <Routes>
          <Route path="/" element={<FanMain />} >
            <Route index element={<FanHome />} />
            <Route path="about" element={<FanAbout />} />

            <Route path="blog/" element={<FanBlog />} />
            <Route path="blog/:id" element={<FanPagePost />} />
            <Route path="blog/:id/edit" element={<FanPageComment />} />


            <Route path="blog/new" element={<FanWrapperLogo>
              <FanBlog   />
            </FanWrapperLogo>} />
            <Route path='logo' element={<FanLogo/>}/>


            <Route path="*" element={<FanNotFoundPage />} />
          </Route>

        </Routes>
      </FanContext>

      <FanFooter />
    </div>
  );
}

export default App;
