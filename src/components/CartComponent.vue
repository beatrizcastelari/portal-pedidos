<template>
    <div class="flex justify-end cart2 fixed bottom-0 inset-x-0  inset-0">
        <div class="bg-yellow-500 cart-container transition-opacity absolute  ">
            <div class="flex items-center justify-between  pt-5 pl-5">
                <button @click="close">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div>
            <h1 class="texto text-center font-semibold text-white">Carrinho</h1>
            <div class="flex justify-between total6 p-3 border-b-2 border-white" v-if="cart.length > 2">
                    <h1 class=" font-semibold text-lg lg:text-xl">Total</h1>
                    <h1>R$ {{ total }}</h1>
                </div>
           
            <div class="container space-y-5">
                <p class="texto2 text-white font-semibold">Pizzas</p>
            <div class=" flex" v-for="items in cart" :key="items.id">

                <div class=" imagem border-4 border-white ">
                    <img class="imagem-2" :src="require(`../${items.img}`)" alt="">

                </div>
                <div class="mt-0  ">
                    <h1 class="text-description font-semibold">{{ items.name }}</h1>
                    <p class="text-descrition2">{{ items.description }}</p>

                    <div class="botao  ">
                        <button class="bg-white w-9 rounded-l-xl shadow-xl  " @click="diminuir">-</button>
                        <input class="p-2 w-10  text-center outline-none shadow-xl  botao4 " :value="items.qtd"
                            readonly>
                        <button class="bg-white  w-9 rounded-r-xl shadow-xl " @click="aumentar">+</button>
                    </div>
                </div>

            </div>
            </div>
        </div>
            <div class="shadow-xl bg-white mt-10 mb-48 xl:mb-24">
                <div class="flex justify-between total p-3">
                    <h1 class=" font-semibold text-lg">Total</h1>
                    <h1>R$ {{ total }}</h1>
                </div>
                <div class="flex justify-center ">
                    <button class="texto4 font-semibold text-yellow-500 mb-4 border-2 border-yellow-500 botao2 rounded-2xl"
                        @click="close">Adicionar mais itens</button>
                </div>
                <div class="flex justify-center ">
                    <button
                        class="rounded-2xl font-semibold  bg-yellow-500 text-white texto3 mb-5">Finalizar
                        compra</button>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            quantidade: 1,
            total: 0,
            totalItem: 0,
            itemsCart:[]
        }
    },
    props: {
        cartItems: []
    },

    computed: {
        ...mapState(['cart']),
    },

    created() {
        this.totalCart()
    },

    methods: {
        ...mapActions(['getCartItems', 'setQtd']),
        close() {
            this.$emit("close");
        },
        aumentar() {
            console.log(this.cart)
            this.quantidade++
            this.itemsCart = this.cart
            this.itemsCart.qtd = this.quantidade
            this.setQtd(this.itemsCart)
        },
        diminuir() {
            if (this.quantidade === 1) {
                this.quantidade = 1;
            }
            else {
                this.quantidade--;
            }
        },
        totalCart() {
            for (let i in this.cart) {
                this.totalItem = this.cart.find((item) => item.id == this.cart[i].id)
                this.total += this.totalItem.price * this.cart[i].qtd
            }
        }
    },
}

</script>
<style>
@media (max-width:320px) {
    .cart-container {
        width: 100%;
        height: 800px;
        overflow-y: auto;

    }
  
  
    .imagem {
        min-width: 30%;
        max-width: 30%;
        height: 100px;
        margin-top: 0;
        
    }
    .imagem-2{
        height: 100%;
        width: 100%;
    }

    .texto {
        font-size: 19px;
        margin-top: 0;
        

    }

    .texto2 {
        font-size: 19px;
        margin-bottom: 0;
        margin-top: 5%;
    }

    .text-description {
        font-size: 17px;
        margin-left: 15px;
    }

    .text-descrition2 {
        font-size: 14px;
        margin-left: 15px;
    }

    .botao {
        margin-top: 20px;
        margin-left: 15px;
        height: 30px;
    }

    .total {
        margin: 2%;
        
    }
    .total6{
        margin-left: 10%;
        font-size: 16px;
        margin-top: 15px;
        margin-right: 10%;
       }

    .texto3 {
        font-size: 17px;
        width: 180px;
        height: 35px;
      
    }

    .texto4 {
        font-size: 20px;
    }

    .botao2 {
        width: 180px;
        height: 35px;
        font-size: 17px;
        margin-top: 0;
    }
    .botao4{
        height: 24px;
    }
}

@media (min-width:321px) and (max-width:450px) {
    .cart-container {
        width: 100%;
        height: 800px;
        overflow-y: auto;

    }
    
  
    .imagem {
        min-width: 30%;
        max-width: 30%;
        height: 100px;
        margin-left: 5%;
        margin-top: 0;
        
    }
    .imagem-2{
        height: 100%;
        width: 100%;
    }

    .texto {
        font-size: 23px;
        margin-top: 0;
        

    }

    .texto2 {
        font-size: 23px;
        margin-top: 5%;
        margin-left: 6%;
        margin-bottom: 0;
    }

    .text-description {
        font-size: 19px;
        margin-left: 15px;
    }

    .text-descrition2 {
        font-size: 15px;
        margin-left: 15px;
    }

    .botao {
        margin-top: 20px;
        margin-left: 15px;
        height: 30px;
    }

    .total {
        margin: 2%;
        
    }
    .total6{
        margin-left: 10%;
        font-size: 18px;
        margin-top: 15px;
        margin-right: 10%;
       }

    .texto3 {
        font-size: 17px;
        width: 180px;
        height: 35px;
      
    }

    .texto4 {
        font-size: 20px;
    }

    .botao2 {
        width: 180px;
        height: 35px;
        font-size: 17px;
        margin-top: 0;
    }
    .botao4{
        height: 24px;
    }
}

@media(min-width:460px) and (max-width:1023px) {
    .cart-container {
        width: 45%;
        height: 800px;
        overflow-y: auto;

    }
    .container{
        max-width:25% ;
    }
  
    .imagem {
        min-width: 30%;
        max-width: 30%;
        height: 100px;
        margin-left: 5%;
        margin-top: 0;
        
    }
    .imagem-2{
        height: 100%;
        width: 100%;
    }

    .texto {
        font-size: 23px;
        margin-top: 0;
        

    }

    .texto2 {
        font-size: 23px;
        
        margin-left: 6%;
        margin-bottom: 0;
    }

    .text-description {
        font-size: 19px;
        margin-left: 15px;
    }

    .text-descrition2 {
        font-size: 15px;
        margin-left: 15px;
    }

    .botao {
        margin-top: 20px;
        margin-left: 15px;
        height: 30px;
    }

    .total {
        margin: 2%;
        
    }
    .total6{
        margin-left: 10%;
        font-size: 18px;
        margin-top: 15px;
        margin-right: 10%;
       }

    .texto3 {
        font-size: 17px;
        width: 180px;
        height: 35px;
      
    }

    .texto4 {
        font-size: 20px;
    }

    .botao2 {
        width: 180px;
        height: 35px;
        font-size: 17px;
        margin-top: 0;
    }
    .botao4{
        height: 24px;
    }
}

@media(min-width:1023px) and (max-width:1439px) {
    .cart-container {
        width: 35%;
        height: 800px;
        overflow-y: auto;

    }
    .container{
        max-width:25% ;
    }
  
    .imagem {
        min-width: 30%;
        max-width: 30%;
        height: 100px;
        margin-left: 5%;
        margin-top: 0;
        
    }
    .imagem-2{
        height: 100%;
        width: 100%;
    }

    .texto {
        font-size: 23px;
        margin-top: 0;
        

    }

    .texto2 {
        font-size: 23px;
        
        margin-left: 6%;
        margin-bottom: 0;
    }

    .text-description {
        font-size: 19px;
        margin-left: 15px;
    }

    .text-descrition2 {
        font-size: 15px;
        margin-left: 15px;
    }

    .botao {
        margin-top: 20px;
        margin-left: 15px;
        height: 30px;
    }

    .total {
        margin: 2%;
        
    }
    .total6{
        margin-left: 10%;
        font-size: 18px;
        margin-top: 15px;
        margin-right: 10%;
       }

    .texto3 {
        font-size: 17px;
        width: 180px;
        height: 35px;
      
    }

    .texto4 {
        font-size: 20px;
    }

    .botao2 {
        width: 180px;
        height: 35px;
        font-size: 17px;
        margin-top: 0;
    }
    .botao4{
        height: 24px;
    }
}

@media(min-width:1440px) and (max-width:1449px) {
    .cart-container {
        width: 30%;
        height: 800px;
        overflow-y: auto;

    }
    .container{
        max-width:25% ;
    }
  
    .imagem {
        min-width: 30%;
        max-width: 30%;
        height: 100px;
        margin-left: 5%;
        margin-top: 0;
        
    }
    .imagem-2{
        height: 100%;
        width: 100%;
    }

    .texto {
        font-size: 23px;
        margin-top: 0;
        

    }

    .texto2 {
        font-size: 23px;
        
        margin-left: 6%;
        margin-bottom: 0;
    }

    .text-description {
        font-size: 19px;
        margin-left: 15px;
    }

    .text-descrition2 {
        font-size: 15px;
        margin-left: 15px;
    }

    .botao {
        margin-top: 20px;
        margin-left: 15px;
        height: 30px;
    }

    .total {
        margin: 2%;
        
    }
    .total6{
        margin-left: 10%;
        font-size: 18px;
        margin-top: 15px;
        margin-right: 10%;
       }

    .texto3 {
        font-size: 17px;
        width: 180px;
        height: 35px;
      
    }

    .texto4 {
        font-size: 20px;
    }

    .botao2 {
        width: 180px;
        height: 35px;
        font-size: 17px;
        margin-top: 0;
    }
    .botao4{
        height: 24px;
    }
}

@media(min-width:1500px) {
    .cart-container {
        width: 25%;
        height: 800px;
        overflow-y: auto;

    }
    .container{
        max-width:25% ;
    }
  
    .imagem {
        min-width: 30%;
        max-width: 30%;
        height: 100px;
        margin-left: 5%;
        margin-top: 0;
        
    }
    .imagem-2{
        height: 100%;
        width: 100%;
    }

    .texto {
        font-size: 23px;
        margin-top: 0;
        

    }

    .texto2 {
        font-size: 23px;
        
        margin-left: 6%;
        margin-bottom: 0;
    }

    .text-description {
        font-size: 19px;
        margin-left: 15px;
    }

    .text-descrition2 {
        font-size: 15px;
        margin-left: 15px;
    }

    .botao {
        margin-top: 20px;
        margin-left: 15px;
        height: 30px;
    }

    .total {
        margin: 2%;
        
    }
    .total6{
        margin-left: 10%;
        font-size: 18px;
        margin-top: 15px;
        margin-right: 10%;
       }

    .texto3 {
        font-size: 17px;
        width: 180px;
        height: 35px;
      
    }

    .texto4 {
        font-size: 20px;
    }

    .botao2 {
        width: 180px;
        height: 35px;
        font-size: 17px;
        margin-top: 0;
    }
    .botao4{
        height: 24px;
    }
    
}</style>