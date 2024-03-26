import { client } from "../../lib/client";

export default function Home({data}) {
    return (
      <div>
        <h1 className="my-8">{data.title}</h1>
        <p className="my-8">{data.publishedAt}</p>
        <div
        dangerouslySetInnerHTML={{
          __html: `${data.body}`,
        }}
      />
      </div>
    );
  }

  export const getStaticPaths=async()=>{
    const data=await client
      .get({
        endpoint: 'blog',
      })
      const paths=data.contents.map((value)=>{
        return {
            params:{
                id:value.id
            }
        }
      })
      return {
        paths,
        fallback:false
      }
  }

  export const getStaticProps=async({params})=>{
    const data = await client.get({ endpoint: "blog", contentId: params.id });
    return {
        props:{
            data
        }
  }
}