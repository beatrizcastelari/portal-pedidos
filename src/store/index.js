import { createStore } from 'vuex'

export default createStore({
  state: {
    pizzaJson: [
      { id: 1, name: "Calabresa", img: "assets/pizzacalabresa2.jpg", price: 20.19, description: "Calabresa,queijo", category: "promocao" },
      { id: 2, name: "Bauru", img: "assets/pizzabauru2.jpg", price: 18.00, description: "Presunto,queijo,tomate", category: "promocao" },
      { id: 3, name: "Marguerita", img: "assets/pizzabauru2.jpg", price: 17.45, description: "Mussarela,molho de tomate,manjericão", category: "normal" },
      { id: 4, name: "Moda da Casa", img: "assets/moda2.jpg", price: 19.77, description: "Presunto,queijo,tomate,bacon", category: "normal" },
      { id: 5, name: "Mussarela", img: "assets/pizza4.jpg", price: 21.43, description: "Molho de tomate, queijo mussarela", category: "normal" },
      { id: 6, name: "Chocolate", img: "assets/chocolate.jpg", price: 18.55, description: "Chocolate,morango", category: "doce" },
      { id: 7, name: "Dois Amores", img: "assets/doisamores.jpg", price: 22.36, description: "Chocolate branco, Chocolate preto,morango", category: "doce" }
  ],
    cart: []
  },

  getters: {
  },
  mutations: {
    setCart(state, item) {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id)
      if(existingItem) {
        existingItem.qtd += item.qtd
      } else {
        state.cart.push({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          img: item.img,
          qtd: item.qtd
        })
      }
    },
    setQtd(state, qtd) {
      console.log(qtd)
      state.cart = qtd
      console.log(state.cart)
    }
  },
  actions: {
    getCartItems({ commit },  item) {
      commit('setCart', item)
    },
    
    setQtd({ commit }, item) {
      commit('setQtd', item)
    }
  },
  modules: {
  }
})
