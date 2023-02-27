<template>
    <div class="container2" >
        
        <div  class="logo">
            <h1>LOGO</h1>
        </div>
        <div>
        <p class="text font-bold">Seja Bem-vindo! Faça seu Pedido</p>
    </div>
    <div class="menu-top">
       <P class="menu3 bg-yellow-500 text-white font-semibold cursor-pointer text-center"> PROMOÇÃO</P>
       <P class="menu2 bg-yellow-500 text-white font-semibold cursor-pointer text-center"> PIZZA</P>
       <P class="menu4 bg-yellow-500 text-white font-semibold cursor-pointer  text-center">PIZZA DOCE</P>
    </div>
    <div class="mt-5 flex justify-center">
        <input class="border-2 border-yellow-500 input-buscar" type="text" placeholder="Digite para buscar um item" >

    </div>
</div>
</template>
<style>
@media(max-width:450px){
.container{
    margin: 0;
}
    .text{
        text-align: center;
        margin-top: 10px;
    }
    .logo{
        text-align: center;
        background-color: #ccc;
        margin: 0;
        height: 100px;
    }
    .menu-top{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        
    }
    .menu2{
        margin-left: 10px;
        width: 20%;
        font-size: 15px;
        height: 25px;
    }
    .menu4{
        font-size: 15px;
        width: 30%;
        margin-left: 10px;
    }
    .menu3{
        font-size: 15px;
        width: 30%;
    }
    .input-buscar{
        background:url(../assets/procurar.png) no-repeat scroll 7px 7px;
        background-position-y: center;
        padding: 5px;
        padding-left: 10px;
        background-size: 1.3em;
        text-indent: 20px;
        line-height: normal;
        width: 70%;
        font-size: 13px;
    
    }
}
@media(min-width: 451px)and (max-width: 1020px){
    .logo{
        text-align: center;
        background-color: #ccc;
        margin: 0;
        height: 100px;
        
    }
    .container2{
    margin: 0;
}
    .text{
        text-align: center;
        margin-top: 30px;
        font-size: 17px;
    }
    .menu-top{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        
    }
    .menu2{
        margin-left: 10px;
        width: 20%;
        font-size: 17px;
        
    } 
    .menu3{
        width: 20%;
        font-size: 17px;
    }
    .menu4{
        margin-left: 10px;
        width:20%;
    }
        
    
    .input-buscar{
        background:url(../assets/procurar.png) no-repeat scroll 7px 7px;
        background-position-y: center;
        padding: 5px;
        padding-left: 10px;
        background-size: 1.3em;
        text-indent: 20px;
        line-height: normal;
        width: 300px;
    }
}
@media(min-width: 1021px)and (max-width: 1439px){
    .logo{
        text-align: center;
        background-color: #ccc;
        margin: 0;
        height: 150px;
        
    }
    .container2{
    margin: 0;
}
    .text{
        text-align: center;
        margin-top: 30px;
        font-size: 20px;
    }
    .menu-top{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        
    }
    .menu2{
        margin-left: 10px;
        width: 20%;
        font-size: 20px;
        height: 35px;
        
    } 
    .menu3{
        width: 20%;
        font-size: 20px;
    }
    .menu4{
        margin-left: 10px;
        width:20%;
        font-size: 20px;
    }
        
    
    .input-buscar{
        background:url(../assets/procurar.png) no-repeat scroll 7px 7px;
        background-position-y: center;
        padding: 5px;
        padding-left: 10px;
        background-size: 1.3em;
        text-indent: 20px;
        line-height: normal;
        width: 40%;
    }
}
@media(min-width: 1440px){
    .logo{
        text-align: center;
        background-color: #ccc;
        margin: 0;
        height: 150px;
        
    }
    .container2{
    margin: 0;
}
    .text{
        text-align: center;
        margin-top: 30px;
        font-size: 27px;
    }
    .menu-top{
        display: flex;
        justify-content: center;
        margin-top: 30px;
        
    }
    .menu2{
        margin-left: 25px;
        width: 20%;
        font-size: 25px;
        height: 45px;
        
    } 
    .menu3{
        width: 20%;
        font-size: 25px;
    }
    .menu4{
        margin-left: 25px;
        width:20%;
        font-size: 25px;
    }
        
    
    .input-buscar{
        background:url(../assets/procurar.png) no-repeat scroll 7px 7px;
        background-position-y: center;
        padding: 5px;
        padding-left: 10px;
        background-size: 1.3em;
        text-indent: 20px;
        line-height: normal;
        width: 40%;
        height: 45px;
        margin-top: 20px;
    }

}
</style>