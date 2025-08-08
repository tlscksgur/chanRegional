function motto() {

  const txt = [
    "고객신뢰를 바탕으로 행복한 사회를 추구하는 글로벌 기업",
    "기업의 가치 혁신의 출발은 나눔을 시작으로 고객 가치를 탐험한다.",
    "세계 기후변화 대응을 위해 100% 재생에너지로 생산된 제품만 선별한다.",
    "다른 생각 다른 미래, 플랫폼 기반의 글로벌 미래 혁신을 선도한다.",
    "글로벌 수준의 개인정보보호 및 보안 체계를 유지한다."
  ]

  const subText = ["행복신뢰", "가치나눔", "환경선도", "미래혁신", "정보보안"]

  const mottoLi = document.querySelectorAll(".mottoBox li")
  const mottoTitle = document.querySelectorAll(".mottoTitle")
  const mottoMainText = document.querySelector(".mottoMainTxt")

  mottoLi.forEach((e, i) => {
    e.addEventListener("mouseenter", ()=>{
      mottoLi.forEach(item => {
        item.style.backgroundImage = `url(./${e.className}.jpg)`
      });
      
      if(i < 5){
        mottoMainText.textContent = txt[i]
      }

      mottoTitle.forEach(t => t.textContent = "");

      if(i < subText.length) {
        const titleNum = e.querySelector(".mottoTitle")
        titleNum.textContent = subText[i]
      }

      e.addEventListener("mouseleave", ()=>{
        mottoLi.forEach(mot => {
          mot.style.backgroundImage = `url(./${mot.className}.jpg)`

          mottoMainText.textContent = ""
        });

        mottoTitle.forEach((mti, ii) => {
          mti.textContent = subText[ii]
        });

      })

    })
  });
}

motto()