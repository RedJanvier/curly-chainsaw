const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    provider_name: 'Dusupay',
    provider_public_key: 'PUBK-20206605218124aa880f5db20e1457a88',
    provider_private_key: 'SECK-202011ba7e42b2e419018d54e20efccb6',
    service_type: 1,
    active: 1,
    createdAt,
    updatedAt,
  },
  {
    provider_name: 'Flutterwave',
    provider_public_key: 'FLWPUBK-d7e6a5f01b7c3a2d333ba3a06acb1bf0-X',
    provider_private_key: 'FLWSECK-dade68e94beb985f9f2136d13bed47df-X',
    service_type: 2,
    active: 1,
    createdAt,
    updatedAt,
  },
];
