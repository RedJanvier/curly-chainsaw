import UserDoc from './userDoc';

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
        description: 'This is the swagger documentation for JusticeBot API',
        version: '1.0.0',
        title: 'JusticeBot',
        termsOfService: '',
        contact: {
          email: '',
        },
        license: {
          name: 'Apache 2.0',
          url: '',
        },
      },
      host: 'justicebot.com',
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
        },

        externalDocs: {
          description: '',
          url: '',
        },
      },
    };
  };
}

export default SwagDoc;
