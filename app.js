const panels = document.querySelectorAll('.panel'),
  circles = document.querySelectorAll('.circle'),
  progress = document.getElementById('progress'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next');

let activeClass = 1;
let panCls = 1;

next.addEventListener('click', () => {
  activeClass++
  panCls++
  if (activeClass > circles.length) {
    activeClass = circles.length
  }
  if (panCls > panels.length) {
    panCls = panels.length
  }
  panelCls()
  slides();
})

prev.addEventListener('click', () => {
  activeClass--
  panCls--
  if (activeClass < 1) {
    activeClass = 1
  }
  if (panCls < 1) {
    panCls = 1;
  }
  panelCls()
  slides();
})

const slides = () => {
  circles.forEach((circle, idx) => {
    if (idx < activeClass) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  
  const active = document.querySelectorAll('.active')

  progress.style.width = (active.length -1) / (circles.length -1) * 100 + '%';
  if (activeClass === 1) {
    prev.disabled = true
  }else if(activeClass === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

const panelCls = () => {
  panels.forEach((panel, idx) => {
    if (idx < panCls) {
      removeCls();
      panel.classList.add('pActive')
      console.log('addClass')
    }
    // else {
    //   removeCls();
    //   panel.classList.add('pActive')
    //   console.log('removeClass')
    // }
  })
}


const removeCls = () => {
  panels.forEach((panel) => {
    panel.classList.remove('pActive')
  })
}