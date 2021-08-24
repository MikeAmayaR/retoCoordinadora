'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import challengeRoute from './route/ChallengeRoute.js';

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '60mb' }));
app.use(bodyParser.urlencoded({ limit: '60mb', extended: false }));

app.use("/challenge/v1.0", challengeRoute);

app.get('/develop/health', (req, res) => res.status(200).send({
    message: 'Service Working.'
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
export default app;