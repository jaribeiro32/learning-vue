new Vue({
    el: '#desafio',
    data:{
        nome: 'Jhonny Ribeiro',
        idade: 28, 
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    }, 
    methods:{
        multiplicaIdade(){
            return this.idade * 3
        }, 
        randomicos(){
            return Math.floor(Math.random() * 2)
        }
    }
})