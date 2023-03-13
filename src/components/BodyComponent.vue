<template>
     <ModalComponent class="" 
        :selected-pizza="selectedPizza"
        v-if="modalOpen" 
        @close="modalOpen = false" 
     />
    <div class="container" v-else>
        <div class="font-semibold  mt-6">
            <h1 class="title"> PROMOÇÃO</h1>
        </div>
        <div>
            <div class="container-pizza pizza1">
            <div class="foto-container flex mt-3 cursor-pointer mb-7 " v-for="pizza in pizzaPromocao" :key="pizza.id">
                <img class="foto h-16 md:h-44 lg:h-48" :src="require(`../${pizza.img}`)" alt="">
                
                <div class="ml-3 xl:ml-5" @click="openModal(pizza)">
                    <h3 class="font-medium description">{{ pizza.name }}</h3>
                    <p class="description2">{{ pizza.description }}</p>
                    <p class="price font-semibold">R${{ pizza.price }}</p>
                </div>
              
            </div>
        </div>
            
            <div class="font-semibold  mt-6">
            <h1 class="title"> Pizza</h1>
        </div>
        <div class="container-pizza pizza2 xl:space-x-48 ml-16 mr-12">
            <div class="foto-container flex mt-3 cursor-pointer mb-7 " v-for="pizza in pizzaNormal" :key="pizza.id">
                
                <img class="foto h-16 md:h-44" :src="require(`../${pizza.img}`)" alt="">
        
                <div class="ml-8 xl:ml-5" @click="openModal(pizza)" >
                    <h3 class="font-medium description">{{ pizza.name }}</h3>
                    <p class="description2">{{ pizza.description }}</p>
                    <p class="price font-semibold">R${{ pizza.price }}</p>
                </div>
                
            </div>
        </div>
        </div>
        <div class="font-semibold  mt-6">
            <h1 class="title"> Pizza doce</h1>
        </div>
        <div class="container-pizza pizza3">
            <div class=" foto-container flex mt-3 cursor-pointer mb-7  " v-for="pizza in pizzaDoce" :key="pizza.id">
               
                <img class="foto h-16 md:h-44" :src="require(`../${pizza.img}`)" alt="">
        
                <div class="ml-3 xl:ml-5" @click="openModal(pizza)">
                    <h3 class="font-medium description">{{ pizza.name }}</h3>
                    <p class="description2">{{ pizza.description }}</p>
                    <p class="price font-semibold">R${{ pizza.price }}</p>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>

import _ from 'lodash'
import ModalComponent from './ModalComponent.vue';
import { mapState } from 'vuex';

export default {

    components: {
    ModalComponent,
    },


    data() {
        return {
            pizza: {},
            pizzaPromocao: {},
            pizzaDoce: {},
            pizzaNormal: {},
            modalOpen: false,
            selectedPizza: []
        };
    },

    computed: {
        ...mapState(['pizzaJson']),
    },
    created() {
        this.pizza = _.groupBy(this.pizzaJson, "category");
        this.pizzaPromocao = this.pizza.promocao;
        this.pizzaDoce = this.pizza.doce;
        this.pizzaNormal = this.pizza.normal;
    },
    methods: {
        openModal(pizza){
            this.modalOpen=!this.modalOpen
            this.selectedPizza = pizza
        }
    },
}


</script>

 
<style>
@media(max-width:450px) {
    .foto {
        width: 25%;

    }

    .container {
        padding-left: 7%;
    }
    .price{
        font-size: 12px;
    }
    .description2{
        font-size: 12px;
    }
    .description{
        font-size: 14px;
    }
}

@media (min-width: 451px) and (max-width: 1020px) {
    .title {
        font-size: 20px;

    }

    .foto {
        width: 30%;
    }

    .description {
        font-size: 20px;
    }

    .container {
        padding-left: 5%;
    }
}

@media (min-width:1021px) and (max-width: 1439px) {
    .title {
        font-size: 25px;

    }

    .foto {
        width: 30%;
    }

    .description {
        font-size: 25px;
    }

    .container {
        padding-left: 5%;
    }

    .description2 {
        font-size: 17px;
    }
}

@media (min-width:1440px) {
    .container-pizza{
        display: flex;
        justify-content: center;
        margin-top: 3%;
        text-align: start;
        
    }
    .pizza1{
        margin-left: 15%;
        
    }
   
    .pizza3{
        margin-left: 8%;
        
    }
    
    .title {
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
    .foto-container{
        width: 70%;
    
        
    
    }
    .foto img{
       min-width: 100%;
       max-width: 100%;
    }

    .description {
        font-size: 27px;
    }

    .container {
        margin-top: 60px;
    }

    .description2 {
        font-size: 18px;
    }
    .price{
        margin-top: 12px;
        
        font-size: 20px;
      
    }

}
</style>