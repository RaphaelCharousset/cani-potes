const { Router } = require('express');
const router = Router();
const userController = require('./controllers/userController');
const checkCreateDog = require('./middlewares/checkCreateDog');
const checkToken = require('./middlewares/checkJwt');
const rideController = require('./controllers/rideController');
const dogController = require('./controllers/dogController');
const formController = require('./controllers/formController');
const mailController = require('./controllers/mailController');

const multer = require('./../app/middlewares/multerConfig');

router.get('/', checkToken, function (req, res) {
    res.send('GET request to the homepage token ok ' + req.userId)
});

router.get('/characteristic', formController.getDogCharacteristic);

router.post('/login', userController.login),
    router.post('/subscribe', userController.addNewUser);
router.delete('/account/delete', userController.deleteAccount);

router.get('/rides', rideController.findAll);

//todo checktoken
router.post('/ride', rideController.create);
router.get('/ride', rideController.getRidesByMember);

router.delete('/ride/:rideId(\\d+)', checkToken, rideController.delete);
//todo quand front ok, rajout checkToken
router.get('/ride/:rideId(\\d+)', rideController.findOneRideWithAllInformations);

router.delete('/ride/:rideId(\\d+)/participation', checkToken, rideController.leaveARide);

router.post('/ride/:rideId(\\d+)/participation', checkToken, rideController.addNewParticipant);

router.delete('/ride/:rideId(\\d+)/participation/user/:userId(\\d+)', checkToken, rideController.removeUserFromRide);

//todo checktoken
router.get('/profile/:profileId(\\d+)/dogs/:dogId(\\d+)', checkToken, dogController.getOneDog);

<<<<<<< HEAD
router.get('/social/profile/:idUser', checkToken, userController.getProfile);

router.patch('/account/edit', checkToken, userController.save);
=======
router.post('/profile/:profileId(\\d+)/dogs/', multer, dogController.createDog);

router.get('/social/profile/:idUser', checkToken, userController.getProfile);

//todo checktoken
router.delete('/profile/:profileId(\\d+)/dogs/:dogId(\\d+)', dogController.delete);

router.patch('/account/edit', checkToken, userController.save);

router.post('/social/message/ride/:idRide',checkToken, mailController.sendMailToRide);

>>>>>>> 03ee97fbc2dc361323169ed0299e0aaf41b3f170

module.exports = router;