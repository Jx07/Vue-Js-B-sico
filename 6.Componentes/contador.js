Vue.component('contador',{
template:

`
<div>
    <p>{{contador}}</p>
    <button @click='contador++'>contador</button>
</div>
`,
data(){
    return{
    contador:0
    }
}
})