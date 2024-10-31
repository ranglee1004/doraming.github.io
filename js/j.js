
let currentPosition = 0;
    const cardWidth = 25; // 카드 한 개의 너비 (%)
    const totalCards = 8; // 총 카드 수
    const visibleCards = 4; // 한 화면에 보이는 카드 수

    function moveSlide(direction) {
      // 이동할 위치 계산
      currentPosition += direction;
      if (currentPosition < 0) {
        currentPosition = 0; // 첫 카드에서 멈춤
      } else if (currentPosition > totalCards - visibleCards) {
        currentPosition = totalCards - visibleCards; // 마지막 카드에서 멈춤
      }
      // transform을 사용해 슬라이드 이동
      document.getElementById('cardList').style.transform = `translateX(-${currentPosition * cardWidth}%)`;
    }
