import UserDoc from './userDoc';
import PlaceDoc from './placeDoc';
import UserHistoryDoc from './userHistoryDoc';
import SearchDoc from './searchDoc';
import AdsPriceDoc from './adspriceDoc';
import AuditTrailDoc from './audittrailDoc';
import ClienDoc from './clientDoc';
import CountriesDoc from './countriesDoc';
import DealerDoc from './dealerDoc';
import HistorySearchDoc from './historySearchDoc';
import PackagesDoc from './packagesDoc';
import PaymentDoc from './paymentDoc';
import PayoutDoc from './payoutDoc';
import PlaceStatisticsDoc from './placeStatisticDoc';
import PropertyTypesDoc from './propertyTypesDoc';
import ServiceDoc from './servicesDoc';
import UserLevelDoc from './userLevelDoc';
import UserLevlPerDoc from './userLevelPerDoc';
import HomePropertyDoc from './homeProperties';
import CustomerCareDoc from './customerCareDoc';
/**
 * SwagDoc
 */
class SwagDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      swagger: '2.0',
      info: {
        description: 'This is the swagger documentation for Zwaplace API',
        version: '1.0.0',
        title: 'Zwaplace',
        termsOfService: '',
        contact: {
          email: '',
        },
        license: {
          name: 'Apache 2.0',
          url: '',
        },
      },
      host: 'zwaplace.com',
      basePath: '/v1',
      tags: [
        {
          name: 'user',
          description: 'Operations about user',
          externalDocs: {
            description: 'Find out more about our user',
            url: '',
          },
        },
        {
          name: 'Places',
          description: 'Operations about user',
          externalDocs: {
            description: 'Find out more about our places',
            url: '',
          },
        },
        {
          name: 'Search',
          description: 'Operations about search',
          externalDocs: {
            description: 'Find out more about our search',
            url: '',
          },
        },
        {
          name: 'UserHistory',
          description: 'Operations about user',
          externalDocs: {
            description: 'Find out more about our user history',
            url: '',
          },
        },
        {
          name: 'CustomerCare',
          description: 'Operations about customer',
          externalDocs: {
            description: 'Find out more about our customer',
            url: '',
          },
        },
      ],

      schemes: ['https', 'http'],

      paths: {
        '/auth/signup': {
          post: {
            tags: ['user'],
            summary: 'Create user',
            description: 'This can only be done by the logged in user.',
            operationId: 'createUser-auth',
            produces: ['application/xml', 'application/json'],
            parameters: [
              {
                in: 'body',
                name: 'body',
                description: 'Created user object',
                required: true,
                schema: {
                  $ref: '#/definitions/User',
                },
              },
            ],
            responses: {
              default: {
                description: 'successful operation',
              },
            },
          },
        },
        '/auth/messenger': {
          post: {
            tags: ['user'],
            summary: 'Create user via messenger',
            description: 'create user via messenger',
            operationId: 'createUser-messenger',
            produces: ['application/xml', 'application/json'],
            parameters: [
              {
                in: 'body',
                name: 'body',
                description: 'Created user object',
                required: true,
                schema: {
                  $ref: '#/definitions/User',
                },
              },
            ],
            responses: {
              default: {
                description: 'successful operation',
              },
            },
          },
        },

        '/search/': {
          get: {
            summary: ' Search places',
            operationId: '',
            responses: {
              '200': {
                description: '',
                schema: {
                  $ref: '#/definitions/Places',
                },
              },
            },
            tags: ['Places'],
          },
        },
        '/userhistory': {
          post: {
            tags: ['UserHistory'],
            summary: 'Create  user history',
            description: 'This can only be done by the logged in user.',
            operationId: 'createUser',
            produces: ['application/xml', 'application/json'],
            parameters: [
              {
                in: 'body',
                name: 'body',
                description: 'User history operation',
                required: true,
                schema: {
                  $ref: '#/definitions/UserHistory',
                },
              },
            ],
            responses: {
              default: {
                description: 'successful operation',
              },
            },
          },
        },

        '/search': {
          post: {
            tags: ['Search'],
            summary: 'Create search',
            description: 'This can only be done by the logged in user.',
            operationId: 'createUser',
            produces: ['application/xml', 'application/json'],
            parameters: [
              {
                in: 'body',
                name: 'body',
                description: 'Search operation',
                required: true,
                schema: {
                  $ref: '#/definitions/Search',
                },
              },
            ],
            responses: {
              default: {
                description: 'successful operation',
              },
            },
          },
        },

        '/customer': {
          post: {
            tags: ['CustomerCare'],
            summary: 'save customer phone number',
            description: 'This can only be done by the logged in user.',
            operationId: 'createUser',
            produces: ['application/xml', 'application/json'],
            parameters: [
              {
                in: 'body',
                name: 'body',
                description: 'Customer operation',
                required: true,
                schema: {
                  $ref: '#/definitions/CustomerCare',
                },
              },
            ],
            responses: {
              default: {
                description: 'successful operation',
              },
            },
          },
        },
      },

      securityDefinitions: {
        petstore_auth: {
          type: 'oauth2',
          authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
          flow: 'implicit',
          scopes: {
            'write:pets': 'modify pets in your account',
            'read:pets': 'read your pets',
          },
        },
        api_key: {
          type: 'apiKey',
          name: 'api_key',
          in: 'header',
        },
      },

      definitions: {
        User: UserDoc.doc(),
        Places: PlaceDoc.doc(),
        Search: SearchDoc.doc(),
        UserHistory: UserHistoryDoc.doc(),
        AdsPrice: AdsPriceDoc.doc(),
        AuditTrail: AuditTrailDoc.doc(),
        Client: ClienDoc.doc(),
        Countries: CountriesDoc.doc(),
        DealerInProperty: DealerDoc.doc(),
        HistorySearch: HistorySearchDoc.doc(),
        HomeProperties: HomePropertyDoc.doc(),
        Packages: PackagesDoc.doc(),
        Payments: PaymentDoc.doc(),
        Payouts: PayoutDoc.doc(),
        PlaceStatistics: PlaceStatisticsDoc.doc(),
        PropertyTypes: PropertyTypesDoc.doc(),
        Services: ServiceDoc.doc(),
        UserLevel: UserLevelDoc.doc(),
        userLevelPermissions: UserLevlPerDoc.doc(),
        CustomerCare: CustomerCareDoc.doc(),
      },

      externalDocs: {
        description: '',
        url: '',
      },
    };
  };
}

export default SwagDoc;
