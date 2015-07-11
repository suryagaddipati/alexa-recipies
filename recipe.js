import handlers from  './handlers.js';
export default function (event, context) {
  try {
    if (event.session.new) {
      handlers.onSessionStarted(event,context);
    }
    handlers[event.request.type](event,context);
  } catch (e) {
    context.fail("Exception: " + e);
  }
};


