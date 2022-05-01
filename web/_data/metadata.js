const groq = require('groq')
const client = require('../utils/sanityClient')
module.exports =  async function() {

  const data = await client.fetch(groq`
  *[_id == "siteSettings"]{
    ...,
    mainImage,
    author->
  }[0]
`);

  
  return data;
}
