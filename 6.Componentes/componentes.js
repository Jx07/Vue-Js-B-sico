Vue.component('cabecera',{
    template:  
    `
    <div>
            <p>{{saludo}}</p>
            <ul>
            <li v-for='menu of menus'>{{menu}}</li>
            <ul>
            
    </div>
    `,
    data(){
        return{
            saludo:'Logo',
            menus:['Nosotros','Servicios','Proyectos','Contactecnos']
        }
        
    }
})  