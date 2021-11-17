const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => 
{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

const app = Vue.createApp({
  
    data() 
    {
        return{
            txtbx:'',
            tasks: []
        };
    },

    methods: 
    {
        
        li() 
        {
            this.tasks.push(this.txtbx)
        }
        

    }
   
});

app.mount('#assignment');