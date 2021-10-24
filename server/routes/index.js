let express = require('express');
let router = express.Router();


let indexController = require('../controllers/index');
/* GET home page. */
router.get('/',indexController.displayHomePage);

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage );


/* GET Contact Us page. */
router.get('/contact',indexController.displayContactPage );

/* Get Rout For displaying the Login page */ 
router.get('/login', indexController.displayLoginPage );
/* Post Rout For processing the Login page  */ 
router.post('/login', indexController.processLoginPage);



/* Get Rout For displaying the Register page */ 
router.get('/register', indexController.displayRegisterPage );
/* Post Rout For processing the Register page  */ 
router.post('/register', indexController.processRegisterPage);

/* Get request to perform the UserLogout  */ 
router.get('/logout', indexController.performLogout);


module.exports = router;









