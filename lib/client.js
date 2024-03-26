import { createClient } from "microcms-js-sdk";

export const client=createClient({
    serviceDomain:"hm-blog-tutorial-nextjs",
    apiKey:process.env.API_KEY,
})