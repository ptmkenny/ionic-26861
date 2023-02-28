import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import sleep from '../utils/sleep';

const QueryAnotherExample: React.FC = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["repoData2"],
    suspense: true,
    queryFn: () =>
      sleep(2000).then(() =>
        axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
      )
  });

  return (
    <div>
      <h1>EXAMPLE 2 {data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
};

export default QueryAnotherExample;
