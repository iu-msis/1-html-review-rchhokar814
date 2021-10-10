const Rough = {
    data() {
      return {
        "books": {}
        }
    },
  
  
   methods: {
      fetchBookData() {
        fetch('/api/book/')
        .then(response => response.json())
        .then((parsedJson) => 
        {
           console.log(parsedJson);
            this.books = parsedJson
        })
  
        .catch( err => 
        {
            console.error(err)
        })
      }
    },
  
  created() {
      this.fetchBookData();
    }
  }
  
  Vue.createApp(Rough).mount('#roughApp');