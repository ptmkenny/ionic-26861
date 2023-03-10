import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import QueryAnotherExample from './QueryAnotherExample';
import { IonLoading } from '@ionic/react';
import { Suspense } from 'react';
import sleep from '../utils/sleep';

const QueryExample: React.FC = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["repoData1"],
    suspense: true,
    queryFn: () =>
      sleep(1000).then(() =>
        axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
      )
  });

  return (
    <>
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
      <Suspense fallback={<IonLoading isOpen message="Loading the second query. This will be shown for 5 seconds instead of being hidden when the data is loaded." duration={5000} />}>
        <QueryAnotherExample />
     </Suspense>
   </>
  );
};

export default QueryExample;
