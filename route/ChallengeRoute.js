import { Router } from 'express';
import challenge from '../controller/ChallengeController.js'; 

const router = Router();

router.post('/average', challenge.average);
router.post('/manipulation', challenge.manipulation);
router.post('/sumArray', challenge.sumArray);
router.post('/transform', challenge.transform);
router.get('/coordinadora/:codigo', challenge.coordinadora);
router.post('/arrayScore', challenge.arrayScore);

export default router;