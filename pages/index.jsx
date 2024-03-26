import Link from "next/link";
import { client } from "../lib/client";

export default function Home({blog}) {
  // console.log(blog)
  return (
    <div>
      <ul>
        {blog.map((value)=>{
          console.log(value)
          return (
            <li key={value.id}>
              <Link href={`./blog/${value.id}`}>{value.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

//ssg
export const getStaticProps=async()=>{
  const data=await client
      .get({
        endpoint: 'blog',
      })
      return {
        props:{
          blog:data.contents
        }
      }
}
