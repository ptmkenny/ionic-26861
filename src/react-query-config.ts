enum TimeMilliseconds {
  MillisecondsInSecond = 1000,
  SecondsInHour = 60 * 60,
  SecondsInDay = 24 * SecondsInHour,
  MillisecondsInDay = SecondsInDay * MillisecondsInSecond,
  MillisecondsInWeek = SecondsInDay * 7,
  MillisecondsInYear = SecondsInDay * 365,
}

const reactQueryDefaultConfig = {
  defaultOptions: {
    queries: {
      // Only send server errors to the error boundary.
      // https://tkdodo.eu/blog/react-query-error-handling
      // useErrorBoundary: (error: ErrorWithResponse) =>
      //   error.response?.status && error.response?.status >= 500,
      useErrorBoundary: true,
      cacheTime: TimeMilliseconds.MillisecondsInWeek,
      staleTime: TimeMilliseconds.MillisecondsInWeek,
      retry: 1,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchInterval: TimeMilliseconds.MillisecondsInWeek,
      suspense: true,
    },
  },
};

export default reactQueryDefaultConfig;
