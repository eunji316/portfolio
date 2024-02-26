import { useState, useEffect } from 'react';
import './App.css';
import app from './firebase';
import Header from './component/Header';

function App() {
  const [barPosition, setBarPosition] = useState(500);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      const newPosition = Math.min(4000, 500 + window.scrollY);
      setBarPosition(newPosition);
    });
  };
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div className="App">
      <Header />
      <div className='all'>
        <div className='left' style={{ top: barPosition }}>
          <p className='l01'>Profile</p>
          <p className='l02'>Skills</p>
          <p className='l03'>Projects</p>
        </div>
        <div className='main'>
          <div className='main_01'>
            <div className='name'>
              <h2>김은지</h2>
              <p className='n01'>2000. 03. 16</p>
            </div>
            <div className='text'>
              <p className='text_1'>#ISFJ #긍정적 #적극적</p>
              <p className='text_2'>안녕하세요! 새로운 경험을 하는 걸 좋아하고, 배움을 즐기는 김은지입니다.</p>
            </div>
          </div>
          <div className='main_02'>
            <div className='m2_01'>
              <p className='m2_title'>SKILLS</p>
            </div>
            <div className='m2_02'>
              <p className='m2_name'>편해요</p>
              <ul>
                <li className='m2_03'>HTML5</li>
                <li className='m2_04'>CSS3</li>
              </ul>
            </div>
            <div className='m2_02'>
              <p className='m2_name'>어느정도 사용할 수 있어요</p>
              <ul>
                <li className='m2_05'>React.js</li>
                <li className='m2_06'>jQuery</li>
                <li className='m2_07'>JavaScript</li>
              </ul>
            </div>
            <div className='m2_02'>
              <p className='m2_name'>사용해봤어요</p>
              <ul>
                <li className='m2_09'>Node.js</li>
                <li className='m2_10'>TypeScript</li>
                <li className='m2_08'>Git</li>
              </ul>
            </div>
          </div>
          <div className='main_03'>
            <div className='m3_01'>
              <p className='m2_title'>PROJECTS</p>
            </div>
            <div className='m3_02'>
              <div className='m3_img'>
                <img src='/img/m301.png' />
              </div>
              <div className='m3_txt'>
                <p className='m3_04'><span className='m3_05'>01</span> ATCHA</p>
                <p className='m3_06'>리액트를 활용해 제작한 팀 협업 반응형 페이지입니다.</p>
                <p className='m3_07'>MOVIE 데이터를 API로 받아와 출력하는 방식 사용. <br /> 서치 페이지에서 원하는 컨텐츠를 검색할 수 있고, 나만의 리뷰를 작성할 수 있으며 다른 사람들과 함께 드라마나 영화를 시청할 수 있습니다. </p>
                <button>Go</button>
              </div>
            </div>
            <div className='m3_08'>
              <div className='m3_img'>
                <img src='/img/m302.png' />
              </div>
              <div className='m3_txt'>
                <p className='m3_04'><span className='m3_05'>02</span> 영화 리스트</p>
                <p className='m3_06'>리액트를 학습하며 만든 영화 리스트 페이지입니다.</p>
                <p className='m3_07'>더미데이터로 출력하는 방식 사용. <br /> 연도별로 모아볼 수 있으며 마우스 hover시 상세보기가 뜨고, 상세보기 클릭시 작품 정보를 확인할 수 있습니다.</p>
                <button>Go</button>
              </div>
            </div>
            <div className='m3_02'>
              <div className='m3_img'>
                <img src='/img/m303.png' />
              </div>
              <div className='m3_txt'>
                <p className='m3_04'><span className='m3_05'>03</span> 교보문고</p>
                <p className='m3_06'>프로젝트로 제작한 반응형 페이지입니다.</p>
                <button>Go</button>
              </div>
            </div>
            <div className='m3_08'>
              <div className='m3_img'>
                <img src='/img/m304.png' />
              </div>
              <div className='m3_txt'>
                <p className='m3_04'><span className='m3_05'>04</span> 경주월드</p>
                <p className='m3_06'>프로젝트로 제작한 반응형 페이지입니다.</p>
                <p className='m3_07'>더미데이터로 출력하는 방식 사용. <br /> 연도별로 모아볼 수 있으며 마우스 hover시 상세보기가 뜨고, 상세보기 클릭시 작품 정보를 확인할 수 있습니다.</p>
                <button>Go</button>
              </div>
            </div>
            <div className='m3_02'>
              <div className='m3_img'>
                <img src='/img/m305.png' />
              </div>
              <div className='m3_txt'>
                <p className='m3_04'><span className='m3_05'>05</span> 록시땅</p>
                <p className='m3_06'>프로젝트로 제작한 페이지입니다.</p>
                <p className='m3_07'> 슬릭 슬라이드를 학습하여 활용했습니다. </p>
                <button>Go</button>
              </div>
            </div>
            <div className='m3_08'>
              <div className='m3_img'>
                <img src='/img/m306.png' />
              </div>
              <div className='m3_txt'>
                <p className='m3_04'><span className='m3_05'>06</span> 울산 관광사이트</p>
                <p className='m3_06'>프로젝트로 제작한 페이지입니다.</p>
                <p className='m3_07'></p>
                <button>Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='f_in'>
          <p className='f_01'>Contacts</p>
          <p className='f_02'><a>eunji8498@gmail.com</a></p>
          <p className='f_03'><a>010.2250.6626</a></p>
          <p className='f_04'><a href='https://github.com'>github</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
