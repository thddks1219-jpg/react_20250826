import React from 'react'
import about from "../assets/img/intro.png"

const introText={
    title: "port developer",
    // 텍스트 이제 여기서 변경 하면 적용됨
    desc: ["talent is","found at the end of the","effort"]
}


const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="intro_inner">
            <div className="intro_title">
                {introText.title}
                {/* 위에 const에 title에 적힌 글씨를 여기에 연결한 것임 위에 텍스트 변경하면 됨 */}
            </div>
            <div className="intro_lines" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="intro_text">
                <div className="text">
                    <div>{introText.desc[0]}</div>
                    {/* desc: ["talent is","found at the end of the","effort"] 중에 0번째 */}
                    <div>{introText.desc[1]}</div>
                    <div>{introText.desc[2]}</div>
                </div>
                <div className="img">
                    <img src={about} alt="intro 이미지" />
                </div>
            </div>
            <div className="intro_lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
