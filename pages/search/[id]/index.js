import { useRouter } from "next/router";
import SearchResultDetails from "../../../components/search/SearchResultDetails";
export default function SearchDetails({ data }) {
  const router = useRouter();
  const id = router.query.id;
  return <SearchResultDetails data={data} />;
}

// This gets called on every request
export async function getServerSideProps({ query }) {
  console.log(query);

  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
