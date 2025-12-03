let main=document.querySelector("main");
const watches = [
  {
    img: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7/c_limit,w_1920/v1/catalogue/2025/upright-c/m279135rbr-0001",
    watch: "Rolex Submariner",
    description: "Premium stainless steel sports watch with automatic movement.",
    price: 859999
  },
  {
    img: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2025/upright-c/m126589rbr-0001",
    watch: "Omega Speedmaster",
    description: "Classic chronograph with a durable sapphire crystal.",
    price: 499999
  },
  {
    img: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_640/v1/catalogue/2025/upright-c/m126234-0051",
    watch: "Casio G-Shock",
    description: "Shock-resistant digital-analog watch built for rough use.",
    price: 12999
  },
  {
    img: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7/c_limit,w_3840/v1/catalogue/2025/upright-c/m126231-0020",
    watch: "Fossil Grant Chronograph",
    description: "Elegant leather strap watch with multi-dial chronograph.",
    price: 15999
  },
  {
    img: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_640/v1/catalogue/2025/upright-c/m278288rbr-0041",
    watch: "Tag Heuer Carrera",
    description: "Luxury automatic watch with precision engineering.",
    price: 299999
  }
];


watches.forEach(function(w){
    main.innerHTML+=`
      <div class="card">
            <div class="watch-container">
                <img src=${w.img}>
            </div>
            <h1 id="watch">${w.watch}</h1>
            <h3 id="des">${w.description}</h3>
            <h3 id="price">$${w.price}</h3>
      </div>`
});