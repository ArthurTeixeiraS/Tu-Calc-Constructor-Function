//Interessante definir classes ou construtoras com letra maiuscula e sem verbos de ação (como o "cria"), pois usando o new,
//fica mais compreensível ler como "nova Pessoa" (new Pessoa) [Literalmente, como se fosse um molde]
class Calculadora{
    constructor(){ //a classe Calculadora possui uma constructor
        //o this, aqui se refere a variavel que foi instanciada lá em baixo, a "calculadora", nesse caso
        this.display = document.querySelector('.display')

        this.inicia = function(){
            this.clickBotoes();
            this.pressionaEnter()
        };

        this.pressionaEnter = function(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        };

        this.realizaConta = function(){
            let conta = this.display.value;
            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida!')
                }
                this.display.value = String(conta)
            } catch(e){
                alert('Conta inválida')
            }
        };

        this.clearDisplay = function(){
            this.display.value = ''
        }

        this.deleteOne = function(){
            this.display.value = this.display.value.slice(0, -1)
        };

        this.clickBotoes = function(){
            document.addEventListener('click', e =>{
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            })
        }

        this.btnParaDisplay = function(valor){
            this.display.value += valor
        }

        /* Fora isso, tudo normal, como no ultimo projeto, mas aqui, por questão de sintaxe, os metodos
            são definidos de forma diferente, usando o 
            this.nomeDoMetedo = function(){
                lalalala codigos
            } 
            *Lembrando que o this se refere sempre a constante que o objeto(ou classe) foi instanciado.
            Da pra ler como calculadora.metodo()
            */


    }
}
const calculadora = new Calculadora
calculadora.inicia();