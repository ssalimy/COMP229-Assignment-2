let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require ('passport'); 





let bookController = require ('../controllers/book'); 

// helper function for gaurd purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated ())
    {
        return res.redirect('/login');
    }
    next();
}


/* Get Rout For the Book List page - READ Operation */ 

router.get('/', bookController.displayBookList );


/* Get Rout For displaying the Add page - CREATE Operation */ 
router.get('/add',requireAuth, bookController.displayAddPage );
/* Post Rout For processing the Add page - CREATE Operation */ 
router.post('/add', requireAuth, bookController.processAddPage);


/* Get Rout For displaying the Edit page - UPDATE Operation */ 
router.get('/edit/:id', requireAuth, bookController.displayEditPage );
/* Post Rout For processing the Edit page - UPDATE Operation */ 
router.post('/edit/:id', requireAuth, bookController.processEditPage );


/* Get request to perform the deletion - DELETE Operation */ 
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports= router;


