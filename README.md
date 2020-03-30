# Learnings

* Express allows devs to outsource routing
* Create a separate directory called routes & store routes inside this directory
* Define, export and use your router via the express.Router() function as follows:

```
const router = express.Router()

router.get('/', (req, res, next) => {
	res.send('<h1>Home page</h1>')
	res.end()
})

module.exports = router
```

* Require and use your routes in app.js as follows:

```
const adminRoutes = require('./routes/admin')
app.use(adminRoutes)
```

* A 404 page can be added by putting the following at the bottom of app.js

```
app.use((req, res, next) => {
	res.status(404)
	res.send('<h1>Page not found</h1>')
})
```

