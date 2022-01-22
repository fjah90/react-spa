import Cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { PageConfig } from "next";
import resolvers from "./resolvers";
import typeDefs from "./schemas";

export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
};

const cors = Cors();

const apolloServer = new ApolloServer({ typeDefs, resolvers });


const startServer = apolloServer  .start();

export default cors(async (req: any, res: any) => {
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

    await startServer;
    await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});