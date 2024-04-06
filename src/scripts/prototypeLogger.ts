(() => {
  interface ErrorDetails {
    id: string;
    type: string;
    message: string;
    stack: string | undefined;
    date: string;
    url: string;
    sessionInfo: {
      sessionId: string;
    };
  }

  const generateSessionId = (): string => {
    return "sessionId-" + Math.random().toString(36).substring(2, 9);
  };

  const sessionId: string = generateSessionId();

  const handleError = (event: ErrorEvent | PromiseRejectionEvent): void => {
    let message: string;
    let stack: string | undefined;

    if ("reason" in event) {
      message =
        event.reason instanceof Error
          ? event.reason.message
          : "Promise rejected with non-Error value";
      stack = event.reason instanceof Error ? event.reason.stack : undefined;
    } else {
      message = event.message;
      stack = event.error?.stack;
    }

    const errorDetails: ErrorDetails = {
      id: "errorId-" + Math.random().toString(36).substring(2, 9),
      type: event.type,
      message: message,
      stack: stack,
      date: new Date().toISOString(),
      url: window.location.href,
      sessionInfo: {
        sessionId: sessionId,
      },
    };

    const data: string = JSON.stringify(errorDetails);
    navigator.sendBeacon("https://example.com/api/errors", data);
  };

  window.addEventListener("error", handleError);
  window.addEventListener("unhandledrejection", handleError as EventListener);
})();
