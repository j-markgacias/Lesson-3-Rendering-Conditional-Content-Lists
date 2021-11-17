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
            tasks: [],
            toggler: 'Hide',
            tn: false,

        };
    },

    methods: 
    {
        
        li() 
        {
            this.tasks.push(this.txtbx)
        },

        ToggleBtn()
        {
            this.tn = !this.tn

            if (this.tn === true) 
            {
                this.toggler = 'Show List'
            }
            else 
            {
                this.toggler = 'Hide'
            }
        }

    }
   
});

app.mount('#assignment');