const User = {
    data() {
      return {
        "person": {},
        };
    },
    created() {
      fetch('https://randomuser.me/api')
      .then( response => response.json())
      .then( function (parsedJson){
          this.person = parsedJson.results[0]         
      })
      .catch( err => {
        console.error( error)
      })     
  }
}  
Vue.createApp(User).mount('#userApp');