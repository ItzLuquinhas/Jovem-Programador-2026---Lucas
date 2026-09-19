const {createApp} = Vue;

createApp({
    data() {
        return {
            mensagem: "Minha primeira app Vue!",
            nome: "Lucas",
            idade: 18,
            cidade: "Concórdia",
            urlImage: "./image/geladeira.jpg",
            linkSite: "https://youtube.com",
            logado: false,
            carregando: true,
            contador: 0
        };
    },
    methods:{
        logar(){
            this.logado=true;
        },
        carregar(){
            this.carregando=false;
        },
        incrementar(){
            this.contador++;
        },
        zerar(){
            this.contador=0;
        }
    }
}).mount("#app");