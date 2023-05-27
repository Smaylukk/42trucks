import docs from "@googleapis/docs";
import { configApp } from "./utils";

export const loadData = async () => {
  const auth = new docs.auth.GoogleAuth({
    credentials: {
      client_email: configApp.googleServiceAccount,
      private_key: configApp.googlePrivateKey,
    },
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ["https://www.googleapis.com/auth/documents"],
  });

  const client = await docs.docs({
    version: "v1",
    auth: auth,
  });

  const createResponse = await client.documents.get({
    auth,
    documentId: configApp.googleSheetId,
  });

  console.log(JSON.stringify(createResponse.data));
};
