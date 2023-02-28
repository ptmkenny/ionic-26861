import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import sleep from '../utils/sleep';

const SlowQueryExample: React.FC = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["repoDataSleep"],
    suspense: true,
    queryFn: () =>
      sleep(5000).then(() =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
      )
  });

  return (
    <div>
      <h1>EXAMPLE SLOW QUERY {data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
};

export default SlowQueryExample;
