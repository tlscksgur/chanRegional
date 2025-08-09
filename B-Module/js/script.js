// 전체상품 fetch

//fetch("./js/product.json")
//.then(res => res.json())
//.then(data => {
//  const product = document.querySelector(".product")
//
//  Object.values(data.product).flat().forEach(e => {
//    product.innerHTML += `
//      <ul class="ownItem">
//        <li class="title">${e.title}</li>
//        <li class="img"><img src="${e.img}" alt="${e.title}"></li>
//        <li class="content">${e.content}</li>
//        <li class="price">${e.price}</li>
//        <li class="btnBox"><button class="buyBtn">구매하기</button> <button class="cartBtn">장바구니</button></li>
//      </ul>
//    `
//  });
//
//})


// 인기상품 fetch

// fetch("./js/product.json")
// .then(res => res.json())
// .then(data => {
//   const popularItem = document.querySelector(".popularItem")
//   let i = 1;

//   Object.values(data.product).map(item => {
//     let popular = item.find(e => e.price.includes(" "))
//     let [ori, sale] = popular.price.split(" ")

//     popularItem.innerHTML += `
//       <ul class="ownItem popular${i++}">
//           <li class="title">${popular.title}</li>
//           <li class="img"><img src="${popular.img}" alt="${popular.title}"></li>
//           <li class="content">${popular.content}</li>
//           <li class="price"><p class="strikeLine">${ori}</p> ${sale}</li>
//           <li class="den">${popular.den}</li>
//           <li class="benefit">${popular.tkrwp1} / ${popular.tkrwp2}</li>
//           <li class="btnBox">
//             <button class="buyBtn">구매하기</button>
//             <button class="cartBtn">장바구니</button>
//           </li>
//         </ul>
//     `
//   })

// })


// 장바구니 fetch

// fetch("./js/product.json")
// .then(res => res.json())
// .then(data => {
//   const cartBox = document.querySelector(".cartBox")

//   const txt = Object.values(data.product.healthFood).forEach(e => {
    
//     cartBox.innerHTML = `
//       <ul>
//         <li>${e.title}</li>
//         <li><img src="${e.img}" alt="${e.title}"></li>
//         <li>${e.content}</li>
//         <li>${e.price}</li>
//         <li>${e.den}</li>
//       </ul>
//     `

//   });

// })


// drag and drop 모달

//fetch("./js/product.json")
//.then(res => res.json())
//.then(data => {
//  console.log(data);
//  const exhibition = document.querySelector(".exhibition")
//
//  Object.values(data.product).forEach(item => {
//    item.forEach(e => {
//      exhibition.innerHTML += `
//        <ul>
//          <li class="Dtitle">${e.title}</li>
//          <li class="Dimg"><img src="${e.img}" alt="${e.title}"></li>
//          <li class="Dcontent">${e.content}</li>
//          <li class="Dprice">${e.price}</li>
//        </ul>
//      `
//    });
//  });
//
//})