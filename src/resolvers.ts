import { IResolvers } from '@graphql-tools/utils';
import { log } from 'detox';

import { generateFakeResponse } from './faker';

const path = require('path');
const fs = require('fs');

const resolvers: IResolvers = {
  LoadPaymentMethod: {
    __resolveType(obj: any) {
      if (obj.loadPaymentMethodId) {
        return 'CardPaymentMethod';
      }
      // Handle other cases as needed
    },
  },
  Query: {
    listServiceFeatures: (parent: any, args: any, context: any, info: any) => {
      // const jsonpath = path.resolve(
      //   __dirname,
      //   `../json/${context.headers.featureid}/listServiceFeatures.json`,
      // );
      // log.info('jsonpath', jsonpath);
      // return parseJsonResponse(jsonpath);

      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'listServiceFeatures',
        ),
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getUser: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/getUser.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listAccounts: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listAccounts.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listLoadMethods: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'listLoadMethods',
        ),
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listLoadPaymentMethods: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listLoadPaymentMethods.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getManualLoadPageDetails: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/getManualLoadPageDetails.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listBankTransferRequests: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'listBankTransferRequests',
        ),
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listTransactionReportIssueTypes: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listTransactionReportIssueTypes.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listRemittanceTargets: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listRemittanceTargets.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getBonusConfig: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/getBonusConfig.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listPnwPayments: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listPnwPayments.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listLoadLocations: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listLoadLocations.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listDueDiligenceSourceOfFundsOptions: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listDueDiligenceSourceOfFundsOptions.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listAccountWalletLimitIncreaseDocumentRequirements: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listAccountWalletLimitIncreaseDocumentRequirements.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listBonusInvitees: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'listBonusInvitees',
        ),
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listUserSensitiveAttributes: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listUserSensitiveAttributes.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getPublicCardInfo: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/getPublicCardInfo.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getAccountCards: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/getAccountCards.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getAccountBalances: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/getAccountBalances.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listAvailableTransferRoutes: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listAvailableTransferRoutes.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    estimateCharge: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/estimateCharge.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listCardConfigurations: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listCardConfigurations.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },

    listPnwBeneficiaries: (parent: any, args: any, context: any, info: any) => {
      let jsonpath;
      try {
        jsonpath = path.resolve(
          __dirname,
          `../json/${context.headers.featureid}/listPnwBeneficiaries.json`,
        );
      } catch (e) {
        jsonpath = path.resolve(__dirname, `../json/listPnwBeneficiaries.json`);
      }
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listPnwCategories: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'pnwCategories',
        ),
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    hasCompletedOnboarding: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/hasCompletedOnboarding.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listTransactionHistoryItems: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      // const jsonpath = path.resolve(
      //   __dirname,
      //   `../json/${context.headers.featureid}/${
      //     !context.headers.scenarioId
      //       ? 'listTransactionHistoryItems'
      //       : `listTransactionHistoryItems_${context.headers.scenarioId}`
      //   }.json`,
      // );
      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'listTransactionHistoryItems',
        ),
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listTransactionHistoryCategories: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      log.info('context.headers.', context.headers);
      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'listTransactionHistoryCategories',
        ),
      );

      // path.resolve(
      //   __dirname,
      //   `../json/${context.headers.featureid}/${
      //     !context.headers.scenarioid
      //       ? 'listTransactionHistoryCategories'
      //       : `listTransactionHistoryCategories_${context.headers.scenarioid}`
      //   }.json`,
      // );

      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getMinimalRequiredAppVersion: (parent: any, info: any) => {
      log.info('__resolveType', parent, info);
      return generateFakeResponse('./schema.graphql', info?.fieldName);
    },
    listCards: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        resolvePath(
          context.headers.featureid,
          context.headers.scenarioid,
          'listCards',
        ),
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    listCardsPaymentAuthorizationRequests: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/listCardsPaymentAuthorizationRequests.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    getCardSensitiveData: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/getCardSensitiveData.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
  },
  Mutation: {
    verifyPasscode: (parent: any, args: any, context: any, info: any) => {
      if (
        args.passcode ===
        '888df25ae35772424a560c7152a1de794440e0ea5cfee62828333a456a506e05' // 9999
      )
        return false;
      return true;
    },
    initiateCheckoutLoad: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/initiateCheckoutLoad.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    createTransfer: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/createTransfer.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    createBankTransferRequest: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/createBankTransferRequest.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    requestVirtualCard: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/requestVirtualCard.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    replaceCard: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/replaceCard.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },

    createAccountWalletLimitUpdateRequest: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/createAccountWalletLimitUpdateRequest.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    updateCardSettings: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/updateCardSettings.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    updateCardStatus: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/updateCardStatus.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
    replaceVirtualCard: (parent: any, args: any, context: any, info: any) => {
      const jsonpath = path.resolve(
        __dirname,
        `../json/${context.headers.featureid}/updateCardStatus.json`,
      );
      log.info('jsonpath', jsonpath);
      return parseJsonResponse(jsonpath);
    },
  },
};

const resolvePath = (
  featureId: string,
  scenarioId: string,
  endpoint: string,
) => {
  switch (featureId) {
    case 'TRANSACTION_FILTER':
      switch (endpoint) {
        case 'listTransactionHistoryCategories':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        default:
          return `../json/${featureId}/${endpoint}.json`;
      }
    case 'TRANSACTION_LIST':
      switch (endpoint) {
        case 'listTransactionHistoryItems':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        default:
          return `../json/${featureId}/${endpoint}.json`;
      }
    case 'LISTPNWCATEGORIES':
      switch (endpoint) {
        case 'pnwCategories':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        default:
          return `../json/${featureId}/${endpoint}.json`;
      }
    case 'LISTLOADMETHOD':
      switch (endpoint) {
        case 'listLoadMethods':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        default:
          return `../json/${featureId}/${endpoint}.json`;
      }
    case 'MANUALBANK_TRANSFER':
      switch (endpoint) {
        case 'listBankTransferRequests':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        default:
          return `../json/${featureId}/${endpoint}.json`;
      }
    case 'INVITE_FRIEND':
      switch (endpoint) {
        case 'listBonusInvitees':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        default:
          return `../json/${featureId}/${endpoint}.json`;
      }
    case 'CARD_STATUS':
      switch (endpoint) {
        case 'listCards':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        case 'listServiceFeatures':
          return `../json/${featureId}/${endpoint}_${scenarioId}.json`;
        default:
          return `../json/${featureId}/${endpoint}.json`;
      }
    default:
      return `../json/${featureId}/${endpoint}.json`;
  }
};

export const parseJsonResponse = (jsonpath: string) => {
  const response = fs.readFileSync(jsonpath, {
    encoding: 'utf8',
    flag: 'r',
  });
  //log.info(JSON.parse(response));
  return JSON.parse(response);
};

export default resolvers;
