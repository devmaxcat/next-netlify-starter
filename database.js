const contentful = require('contentful');

var client = contentful.createClient({
    space: process.env.CONTENT_SPACE_ID ,
    accessToken: process.env.CONTENT_DELIVERY_ACCESS_TOKEN,
    
});

module.exports = client
