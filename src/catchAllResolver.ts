import { IResolvers } from '@graphql-tools/utils';
import { log } from 'detox';

import { generateFakeResponse } from './faker';
import { typeDefs } from './server';

const catchAllResolver: IResolvers<any, any> = {
  Query: {
    phoneNumberExists: (parent: any, args: any, context: any, info: any) => {
      log.info('phoneNumberExists', parent, args, info);
      return generateFakeResponse(typeDefs, info?.fieldName);
    },
    // Create a catch-all resolver for any missing queries
    getMinimalRequiredAppVersion: (
      parent: any,
      args: any,
      context: any,
      info: any,
    ) => {
      log.info('__resolveType', info?.fieldName);
      return generateFakeResponse(typeDefs, info?.fieldName);
      // return generateFakeResponse('./schema.graphql', info?.fieldName);
    },
    listStates: (parent: any, args: any, context: any, info: any) => {
      log.info('__resolveType', info?.fieldName);
      return generateFakeResponse(typeDefs, info?.fieldName);
      // return generateFakeResponse('./schema.graphql', info?.fieldName);
    },
  },
};

export default catchAllResolver;
