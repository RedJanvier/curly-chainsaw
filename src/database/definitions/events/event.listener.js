import EventEmitter from './event.emitter';
import EventStreams from '../../system/events';

EventEmitter.on(
  EventStreams.eventTypes.ACCOUNT_CREATED,
  EventStreams.eventEmitter.EMIT_ACCOUNT_CREATEDD,
);
EventEmitter.on(
  'error',
  err => process.stdout.write('Oops! Something went wrong on DBMS') && err,
);
