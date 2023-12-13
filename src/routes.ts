import { log } from 'detox';
import express from 'express';

import appVersion from '../json/appversion.json';
import userLookup from '../json/userlookup.json';
import { parseJsonResponse } from './resolvers';

const router = express.Router();
const path = require('path');

router.get('/users/mobileApp/lookup/:phoneNumber', (req, res) => {
  // Handle the REST request and send the response
  userLookup.forEach(user => {
    if (Object.keys(user)[0] === req.params.phoneNumber) {
      const userlookup = user[req.params.phoneNumber];
      log.info('UserLook up userId', userlookup);
      return res.json({ userId: userlookup });
    }
  });
});

router.get('/users/mobileApp/version/:version/:platform', (req, res) => {
  log.info('/users/mobileApp/version/:version/:platform');
  // Handle the REST request and send the response
  return res.json({ userId: appVersion });
});

router.post('/cognito', (req: any, res: any) => {
  // Handle the REST request and send the response
  console.log('/cognito', req.body);
  if (
    req.headers['x-amz-target'] === 'AWSCognitoIdentityProviderService.SignUp'
  ) {
    console.log('SignUp **');
  }
  if (
    req.headers['x-amz-target'] ===
    'AWSCognitoIdentityProviderService.InitiateAuth'
  ) {
    if (req.body.AuthFlow === 'REFRESH_TOKEN_AUTH') {
      console.log('req.body.AuthFlow', req.body.AuthFlow);
      const jsonpath = path.resolve(__dirname, `../json/refresh.json`);
      console.log('InitiateAuth **', jsonpath);
      return res.status(200).send(parseJsonResponse(jsonpath));
    }
    const jsonpath = path.resolve(__dirname, `../json/signup.json`);
    console.log('InitiateAuth **', jsonpath);
    return res.status(200).send(parseJsonResponse(jsonpath));
  }
  if (
    req.headers['x-amz-target'] ===
    'AWSCognitoIdentityProviderService.RespondToAuthChallenge'
  ) {
    // const jsonpath = path.resolve(__dirname, `../json/msisdn.json`);
    // return res.status(200).send(parseJsonResponse(jsonpath));
    const challengeType =
      req.body.ChallengeResponses.ANSWER.length < 15
        ? 'MSISDN_ENTRY'
        : 'PASSCODE_VERIFICATION';
    switch (challengeType) {
      case 'MSISDN_ENTRY':
        const jsonpath = path.resolve(__dirname, `../json/msisdn.json`);
        return res.status(200).send(parseJsonResponse(jsonpath));
      case 'PASSCODE_VERIFICATION': {
        const jsonpath = path.resolve(__dirname, `../json/session.json`);
        return res.status(200).send(parseJsonResponse(jsonpath));
      }
    }
  }
  if (
    req.headers['x-amz-target'] === 'AWSCognitoIdentityProviderService.GetUser'
  ) {
    const jsonpath = path.resolve(__dirname, `../json/user.json`);
    console.log('GetUser **', jsonpath);
    return res.status(200).send(parseJsonResponse(jsonpath));
  }
  return res.status(200).send({});
});

export default router;
