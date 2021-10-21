let express = require ('express');
//let { error } = require('jquery');
let router = express.Router();
let mongoose = require('mongoose');
//let book = require('../models/book');

// connect to our book model 
let Book = require('../models/book');

let bookController = require ('../controllers/book'); 

/* Get Rout For the Book List page - READ Operation */ 

router.get('/', bookController.displayBookList );


/* Get Rout For displaying the Add page - CREATE Operation */ 
router.get('/add', bookController.displayAddPage );
/* Post Rout For processing the Add page - CREATE Operation */ 
router.post('/add', bookController.processAddPage);


/* Get Rout For displaying the Edit page - UPDATE Operation */ 
router.get('/edit/:id', bookController.displayEditPage );
/* Post Rout For processing the Edit page - UPDATE Operation */ 
router.post('/edit/:id', bookController.processEditPage );


/* Get request to perform the deletion - DELETE Operation */ 
router.get('/delete/:id', bookController.performDelete);

module.exports= router;


