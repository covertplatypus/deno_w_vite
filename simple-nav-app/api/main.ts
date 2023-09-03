import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import data from "./data.json" assert { type: "json" };
import { Cat } from '../shared/types'

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Let's see some cats!";
  })
  .get("/api", (context) => {
    context.response.body = data;
  })
  .get("/api/:cat", (context) => {
    if (context?.params?.cat) {
      const filtered: Cat[] | [] = data.filter((item: Cat) =>
        item["id"] === context.params.cat
      );
      if (filtered.length === 0) {
        context.response.body = "No cats found.";
      } else {
        context.response.body = filtered[0];
      }
    }
  });

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });