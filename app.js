const checklist = Vue.createApp({
    data() {
        return {
            entry: '',
            todoList: [],

        }
    },

    methods: {
        additem(){
            
            if(this.entry !== ''){

                let newEntry = {
                    title: this.entry
                }

                this.todoList.push(newEntry)
               
            }

            this.entry = ''
           
        },

        removeitem(item){
            console.log("removing item")
            
            var i = 0;

            while (i < this.todoList.length){
                
                var temp = this.todoList[i].title

                if(item.localeCompare(temp) == 0){
                    
                    this.todoList.splice(i, 1)
                }

                i++
            } 

           

            
        }
    }
})

checklist.mount('#checklist')