/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
import { QueryOptions, useLazyQuery } from "@apollo/client";
import { TypedQueryDocumentNode } from "graphql";
import { errors } from "./QueryWrapper";

export const lazyQueryWrapper = (
    query: TypedQueryDocumentNode,
    queryName: string
  ) => {
  
      const [lazyQueryFunction, { data, loading, error }] = useLazyQuery(query)


    async function handleLazyQuery({
        variables,
        ...options
      }: {
        variables: any;
        options?: QueryOptions<any, any>;
      }){
        try {
            const queryData = await lazyQueryFunction({
                variables,
                ...options,
              });
              const status = queryData?.data?.[queryName]?.status;
              const result = queryData?.data?.[queryName]?.result;
              if (status?.code == 1) {
                return result;
              } else {
                if (status.code == 44) {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.href = "/";
                } else {
                  throw new Error(errors[status?.value].fa);
                }
              }
        } catch (error) {
            return error;
        }

        return {handleLazyQuery, loading, error}
      }
  };
  