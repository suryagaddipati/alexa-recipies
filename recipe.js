import handler from  './handlers.js';
import Event from './event.js';
export default function (srcEvent, context) {
  try {
    const event = Event(srcEvent);
    console.log(`event.session.application.applicationId=${event.applicationId}` );

    if (event.isNew) {
      handler.onSessionStarted(event);
    }
    if (event.request.isLaunchRequest) {
      handler.onLaunch(event.request,
                       event.session,
                       function callback(sessionAttributes, speechletResponse) {
                         context.succeed(buildResponse(sessionAttributes, speechletResponse));
                       });
    }  else if (event.request.type === "IntentRequest") {
      handler.onIntent(event.request,
                       event.session,
                       function callback(sessionAttributes, speechletResponse) {
                         context.succeed(buildResponse(sessionAttributes, speechletResponse));
                       });
    } else if (event.request.type === "SessionEndedRequest") {
      handler.onSessionEnded(event.request, event.session);
      context.succeed();
    }
  } catch (e) {
    context.fail("Exception: " + e);
  }
};


