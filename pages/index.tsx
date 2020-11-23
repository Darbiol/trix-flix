import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage : NextPage = () => {
  const Router = useRouter();
  useEffect(() => {
    
    Router.push('/movie/399579', undefined, { shallow: true })
  }, []);

  return (<div>Loading...</div>)
}

export default IndexPage;