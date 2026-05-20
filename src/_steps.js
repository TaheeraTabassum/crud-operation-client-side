/**
 * 
 * mongodb connection
 * 1. create account
 * 2. create an user with password
 * 3. whitelist ip adress
 * 4. database > connect > driver > node >view all code
 * 5. update password in the uri
 * ---------------------------------------------------------
 * 
 * create/post
 * (server side)
 * app.post('/user', async(req, res)=>{})
 * make the function async to use await inside  it
 * make sure to use express.json() middleware
 * access data from the body: const user = req.body
 * const result = await userCollection.insertOne(user);
 * res.send(result)
 * 
 * (client side)
 * 1. create fetch
 * 2. add second parameter as an objet
 * 3. provide method:'POST'
 * 4. Add headers
 * 5. Add body
 * 
 * 
 * --------------------------------------------------------
 * 
 * Read/Get
 *    
 */