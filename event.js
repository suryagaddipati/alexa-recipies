export default function(event){
  const srcRequest = event.request;
  var request = {
    isLaunchRequest: event.request.type === "LaunchRequest"
  }

  return {
    applicationId:event.session.application.applicationId,
    isNew: event.session.new,
    request
  }

};

