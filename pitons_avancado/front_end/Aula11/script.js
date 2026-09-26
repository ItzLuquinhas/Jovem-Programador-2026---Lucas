const {createApp} = Vue;

createApp({
    data() {
        return {
            contador: 0,
            nome: "",
            nomeC: "",
            sobrenomeC: "",
            novidades: false,
            cor: ""
        };
    },
    methods:{
        incrementar_contador(){
            this.contador++;
        },
        subtrair_contador(){
            this.contador--;
        },
        zerar_contador(){
            this.contador=0;
        }
    },
    computed:{
        nomeCompleto(){
            return this.nomeC + ' ' + this.sobrenomeC
        }
    }
}).mount("#app");