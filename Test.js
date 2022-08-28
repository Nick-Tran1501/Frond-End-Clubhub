const axios = require("axios") 

const callPostApi= async() =>{
  axios(
    {
      method:"get",
      url:"https://rmit-club-dhyty.ondigitalocean.app/api/posts"

    }

  )
  .then(res => { console.log(res.data[0].comments[0].content)})
  .catch(err => {
    console.log(err)
  })
}

callPostApi()