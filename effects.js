const ef15 = document.getElementById('ef15');
const ef13 = document.getElementById('ef13');
const ef5 = document.getElementById('ef5');
const ef4 = document.getElementById('ef4');
const ef11 = document.getElementById('ef11');
const ef1 = document.getElementById('ef1');
const ef3 = document.getElementById('ef3');
ef11.addEventListener('click', () => {
    let start = Date.now();

    setInterval(() => {
        let int = Date.now() - start;
        ef11.style.rotate = `${int/5}deg`;
        if (int >= 10000) {

            ef11.style.rotate = '0deg'
            return;
          }
    }, 20)
  
})
ef1.addEventListener('click', () => {
    let start = Date.now();
    ef1.style.position = 'absolute';
    setInterval(() => {
        let int = Date.now() - start;
        ef1.style.right = `${int/5}px`;
        if (int >= 10000) {
            ef1.style.position = 'initial'
            return;
          }
    }, 20)
  
})
ef4.addEventListener('mouseenter', (e) => {
    let opacity = 20;

    setInterval(function ik() {
        if(opacity > 50){
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        } else {
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        }
    },1000);
    
})
function randColor(elem) {
    
    var element = document.getElementById(elem),
        
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),

        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    element.style.backgroundColor = color;

}
ef5.addEventListener('mouseenter',() => {
randColor(ef5.id);
})

ef13.addEventListener('click', (e) => {
    if(ef13.style.filter === 'sepia(100%)'){
        ef13.style.filter = 'sepia(0%)'
    }else {
        ef13.style.filter = 'sepia(100%)'
    }
  
})
ef15.addEventListener('click', () => {

    if(ef15.src === 'https://funik.ru/wp-content/uploads/2019/06/8f21e6af18edb1b8b65e-700x700.png'){
        ef15.src = 'https://i.pinimg.com/originals/82/9c/81/829c81fdc73269934308fb2213c1d857.png'
    } else {
        ef15.src = 'https://funik.ru/wp-content/uploads/2019/06/8f21e6af18edb1b8b65e-700x700.png'
    }
})
var typeText = document.querySelector(".typeText")
var textToBeTyped = "страшно когда ты два"
var index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      if (index > textToBeTyped.length) {
        isAdding = false
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        index++
      }
    } else {
      if (index === 0) {
        isAdding = true
      } else {
        index--
      }
    }
    playAnim()
  }, 120)
}
playAnim()

const btnAlert = document.getElementById('btn');
btnAlert.addEventListener('click', () => {
    alert('ШУТКА ХА ХА')
})
btnClick.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    const points = ['Раз','Два','Три','Четыре','Пять']
    let currentIndex = points.indexOf(e.target.innerText);
    console.log(currentIndex)
    e.target.innerText = points[currentIndex+1] ?? points[0];
})
const promtClick = document.getElementById('btnPromt');

ef3.addEventListener('mouseenter', (e) => {
    e.target.style.transform = 'scale(-1,1)'
})
ef3.addEventListener('mouseout', (e) => {
    e.target.style.transform = 'scale(1,1)'
})
