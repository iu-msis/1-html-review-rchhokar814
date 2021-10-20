const Rough = {
  data() {
    return {
      "books": {},
      bookForm: {}
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
    },
  postNewBook(evt){
    fetch('api/book/create.php', {
        method:'POST',
        body: JSON.stringify(this.bookForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.books = json;
        
        // reset the form
        this.bookForm = {};
      });
      
  }
 },
created() {
    this.fetchBookData();
  }
}

Vue.createApp(Rough).mount('#roughApp');