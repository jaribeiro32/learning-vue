new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaMouse(){
            alert('Alerta via mouse')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    },
})