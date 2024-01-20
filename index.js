const products = [
  {
    id: 1,
    price: 89,
    img: 'images\\1.jpg',
  },
  {
    id: 2,
    price: 99,
    img: 'images\\2.jpg',
  },
  {
    id: 3,
    price: 79,
    img: 'images\\3.jpg',
  },
  {
    id: 4,
    price: 69,
    img: 'images\\4.jpg',
  },
  {
    id: 5,
    price: 99,
    img: 'images\\5.jpg',
  },
  {
    id: 6,
    price: 69,
    img: 'images\\6.jpg',
  },
  {
    id: 7,
    price: 49,
    img: 'images\\7.jpg',
  },
  {
    id: 8,
    price: 99,
    img: 'images\\8.jpg',
  },
  {
    id: 9,
    price: 189,
    img: 'images\\9.jpg',
  },
  {
    id: 10,
    price: 149,
    img: 'images\\10.jpg',
  },
  {
    id: 11,
    price: 79,
    img: 'images\\11.jpg',
  },
  {
    id: 12,
    price: 89,
    img: 'images\\12.jpg',
  },
  {
    id: 13,
    price: 89,
    img: 'images\\13.jpg',
  },
  {
    id: 14,
    price: 89,
    img: 'images\\14.jpg',
  },
  {
    id: 15,
    price: 99,
    img: 'images\\15.jpg',
  },
  {
    id: 16,
    price: 89,
    img: 'images\\16.jpg',
  },
  {
    id: 17,
    price: 79,
    img: 'images\\17.jpg',
  },
  {
    id: 18,
    price: 89,
    img: 'images\\18.jpg',
  },
  {
    id: 19,
    price: 159,
    img: 'images\\19.jpg',
  },
  {
    id: 20,
    price: 89,
    img: 'images\\20.jpg',
  },
  {
    id: 21,
    price: 89,
    img: 'images\\21.jpg',
  },
  {
    id: 22,
    price: 89,
    img: 'images\\22.jpg',
  },
  {
    id: 23,
    price: 89,
    img: 'images\\23.jpg',
  },
  {
    id: 24,
    price: 79,
    img: 'images\\24.jpg',
  },
  {
    id: 25,
    price: 99,
    img: 'images\\25.jpg',
  },
  {
    id: 26,
    price: 59,
    img: 'images\\26.jpg',
  },
  {
    id: 27,
    price: 109,
    img: 'images\\27.jpg',
  },
  {
    id: 1,
    price: 89,
    img: 'images\\1.jpg',
  },
  {
    id: 2,
    price: 99,
    img: 'images\\2.jpg',
  },
  {
    id: 3,
    price: 99,
    img: 'images\\3.jpg',
  },
  {
    id: 4,
    price: 99,
    img: 'images\\4.jpg',
  },
  {
    id: 5,
    price: 99,
    img: 'images\\5.jpg',
  },
]
const items = document.querySelector('.items')
const x = products
  .map((item) => {
    return `<div class="item">
          <img src="${item.img}" alt="" />
          <span>${item.price}$</span>
          <button type="button">Shop Now</button>
        </div>`
  })
  .join('')
items.innerHTML = x
const toggle = document.querySelector('.toggle')
const small = document.querySelector('.show-toggle')
toggle.addEventListener('click', () => {
  small.classList.toggle('active')
})
