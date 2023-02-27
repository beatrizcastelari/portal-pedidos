<template>
    <CartComponent 
        @close="cartOpen = false" 
        :cart-items="selectedPizza"
        v-if="cartOpen"
    />
    <div class="fixed bottom-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center" v-else>
        <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="z-10 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all modal-total "
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white ">
                <div class="">
                    <div>
                       
                        <div class="md:flex container-modal grid justify-items-center ">
                            <div class="modal-image  ">
                                <img class="image-2" :src="require(`../${selectedPizza.img}`)"  alt="">
                            </div>
                            <div class="modal-description ">
                                <div class="modal-title2">
                                    <h1 class="modal-title font-semibold ">{{ selectedPizza.name }}</h1>
                                    <p class="text-black">{{ selectedPizza.description }}</p>
                                </div>
                                <div class="flex space-x-16" >
                                    <h1 class="valor font-semibold">R${{ selectedPizza.price }}</h1>
                                    <div class="flex bg-slate-300 space-x-3 rounded-lg botao">
                                    <button class="pl-3 " @click="diminuir"  >-</button>
                                    <input class="md:p-2 w-10 text-center outline-none " :value="quantidade" readonly >
                                    <button class=" pr-2 " @click="aumentar" >+</button>
                                </div>
                                </div>
                                <div class="mt-6 md:mt-12 flex">
                                    <button class="add bg-green-400 text-white font-semibold rounded-lg" @click="abrir(selectedPizza)">Adicionar</button>
                                    <button class="pl-8 font-semibold remover" @click="close">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartComponent from './CartComponent.vue';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            quantidade: 1,
            cartOpen: false,
            cartItems: []
        };
    },
    name: "ModalComponent",
    props: {
        value: {
            required: false
        },
        selectedPizza: {},
    },
    methods: {
        ...mapActions(['getCartItems']),
        close() {
            this.$emit("close");
        },
        abrir(item){
            this.cartOpen=!this.cartOpen
            this.cartItems = item
            this.cartItems.qtd = this.quantidade
            this.getCartItems(this.cartItems)
        },
        
        aumentar() {
            this.quantidade++;
        },
        diminuir() {
            if (this.quantidade === 1) {
                this.quantidade = 1;
            }
            else {
                this.quantidade--;
            }
        }
    },
    components: { CartComponent }
};
</script>


<style lang="css" scoped>
@media (max-width:320px){
    .modal-total{
        width: 100%;
        height: 55%;
       
    }
    .modal {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}
.modal-title{
    font-size: 18px;
    text-align: center;
    
    
}
.modal-title2{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
}
.valor{
    font-size: 17px;
    margin-top: 5px;

}
.add{
    width: 45%;
    height: 30px;
    font-size: 18px;
}

.container-modal{
    padding: 5%;
    padding-top:9%;
    
}
.modal-image{
   
    width: 70%;
    background-color: black;

}
.image-2{
    width: 100%;
    height: 100%;
}
.remover{
    font-size: 17px;
}

.botao{
    height: 25px;
    font-size: 13px;
    margin-top: 3px;
    
}

    
}
@media (min-width:321px) and (max-width:450px){
    .modal-total{
        width: 100%;
        height: 65%;
       
    }
    .modal {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}
.modal-title{
    font-size: 19px;
    text-align: center;
    
    
}
.modal-title2{
    margin-top: 21px;
    margin-bottom: 20px;
    text-align: center;
}
.valor{
    font-size: 18px;
    margin-top: 5px;

}
.add{
    width: 50%;
    height: 30px;
    font-size: 18px;
}

.container-modal{
    padding: 5%;
    padding-top:9%;
    
}
.modal-image{
   
    width: 70%;
    

}
.image-2{
    width: 100%;
    height: 100%;
}
.remover{
    font-size: 18px;
}

.botao{
    height: 25px;
    font-size: 13px;
    margin-top: 3px;
    
}

}
@media (min-width:451px) and (max-width:1020px){
    .modal-total{
        width: 75%;
        height: 60%;
       
    }
    .modal {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}
.modal-title{
    font-size: 22px;
    
    margin-top: 20px;
    
    
}
.modal-title2{
    
    margin-bottom: 30px;
    
}
.valor{
    font-size: 20px;
    margin-top: 40px;

}
.add{
    width: 80%;
    height: 35px;
    font-size: 20px;
}

.container-modal{
    padding: 8%;
    
   
    
}
.modal-image{
   margin-top: 10px;
    width: 70%;
    

}
.image-2{
    width: 90%;
    height: 180px;
}
.remover{
    font-size: 20px;
}

.botao{
    height: 30px;
    font-size: 14px;
    margin-top: 40px;
    
}
.modal-description{
    margin-left: 15px;
}
}
@media (min-width:1024px) and (max-widht:1439px) {

 .modal-total{
        width: 60%;
        height: 60%;
       
    }
    .modal {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}
.modal-title{
    font-size: 24px;
    
    margin-top: 20px;
    
    
}
.modal-title2{
    font-size: 19px;
    margin-bottom: 30px;
    
}
.valor{
    font-size: 22px;
    margin-top: 40px;

}
.add{
    width: 80%;
    height: 35px;
    font-size: 20px;

}

.container-modal{
    padding: 8%;
    
   
    
}
.modal-image{
   margin-top: 10px;
    width: 70%;
    

}
.image-2{
    width: 80%;
    height: 180px;
}
.remover{
    font-size: 20px;
}

.botao{
    height: 30px;
    font-size: 14px;
    margin-top: 40px;
    
}

}
@media (min-width:1024px){
    .modal-total{
        width: 50%;
        height: 60%;
       
    }
    .modal {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}
.modal-title{
    font-size: 26px;
    
    margin-top: 20px;
    
    
}
.modal-title2{
    font-size: 22px;
    margin-bottom: 30px;
    
}
.valor{
    font-size: 24px;
    margin-top: 40px;

}
.add{
    width: 90%;
    height: 40px;
    font-size: 22px;

}

.container-modal{
    padding: 8%;
    
   
    
}
.modal-image{
   margin-top: 10px;
    width: 70%;
    

}
.image-2{
    width: 80%;
    height: 180px;
}
.remover{
    font-size: 22px;
}

.botao{
    height: 35px;
    font-size: 16px;
    margin-top: 40px;
    
}
}



</style>