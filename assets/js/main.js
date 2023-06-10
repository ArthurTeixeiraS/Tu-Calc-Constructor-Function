//Interessante definir classes ou construtoras com letra maiuscula e sem verbos de ação (como o "cria"), pois usando o new,
//fica mais compreensível ler como "nova Pessoa" (new Pessoa) [Literalmente, como se fosse um molde]
class Calculadora{
    constructor(){ //a classe Calculadora possui uma constructor
        //o this, aqui se refere a variavel que foi instanciada lá em baixo, a "calculadora", nesse caso
        this.display = document.querySelector('.display')
        this.inicia = () => {
            clickBotoes()
            pressionaEnter()
        };
        const pressionaEnter = () => {
            document.addEventListener('keypress', e =>{
                if(e.keyCode !== 13) return; 
                realizaConta();  
            })
        };
        const realizaConta = () => {
            let conta = eval(this.display.value);
            try{
                if(!conta) alert('Conta inválida!')
                this.display.value = String(conta)
            } catch(e){
                alert('Conta inválida')
                return;
            }
        };
        const clearDisplay = () => this.display.value = ''
        const deleteOne = () => this.display.value = this.display.value.slice(0, -1)
        const clickBotoes = () => {
            document.addEventListener('click', e =>{
                const el = e.target;
                if(el.classList.contains('btn-num')) btnParaDisplay(el.innerText);
                if(el.classList.contains('btn-clear')) clearDisplay();
                if(el.classList.contains('btn-del')) deleteOne();
                if(el.classList.contains('btn-eq')) realizaConta();  
                this.display.focus();
            })
        }
        const btnParaDisplay = valor => this.display.value += valor
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