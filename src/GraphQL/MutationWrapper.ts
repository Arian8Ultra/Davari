/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  MutationFunctionOptions,
  MutationOptions,
  TypedDocumentNode,
  useMutation,
} from "@apollo/client";
import { errors } from "./QueryWrapper";

export const MutationWrapper = (
  mutation: TypedDocumentNode,
  mutationName: string
) => {
  const [mutationFunction, { data, loading, error }] =
    useMutation(mutation);

  async function handleMutation({
    variables,
    ...options
  }: {
    variables: any;
    options?:MutationFunctionOptions<any, any>;
  }) {
    try {
      const mutationData = await mutationFunction({
        variables,
        ...options,
      });

      const status = mutationData?.data?.[mutationName]?.status;
      const result = mutationData?.data?.[mutationName]?.result;
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
    //   console.log(error);
    }
  }

  return {
    handleMutation,
    loading,
    error,
  };
};
