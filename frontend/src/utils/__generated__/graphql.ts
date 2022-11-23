import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Imc = {
  __typename?: 'Imc';
  altura: Scalars['String'];
  dt_calculo: Scalars['String'];
  id: Scalars['ID'];
  imc: Scalars['String'];
  peso: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  historico: Array<Imc>;
};

export type ImcQueryVariables = Exact<{ [key: string]: never; }>;


export type ImcQuery = { __typename?: 'Query', historico: Array<{ __typename?: 'Imc', id: string, altura: string, peso: string, imc: string, dt_calculo: string }> };


export const ImcDocument = gql`
    query Imc {
  historico {
    id
    altura
    peso
    imc
    dt_calculo
  }
}
    `;

/**
 * __useImcQuery__
 *
 * To run a query within a React component, call `useImcQuery` and pass it any options that fit your needs.
 * When your component renders, `useImcQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImcQuery({
 *   variables: {
 *   },
 * });
 */
export function useImcQuery(baseOptions?: Apollo.QueryHookOptions<ImcQuery, ImcQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImcQuery, ImcQueryVariables>(ImcDocument, options);
      }
export function useImcLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImcQuery, ImcQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImcQuery, ImcQueryVariables>(ImcDocument, options);
        }
export type ImcQueryHookResult = ReturnType<typeof useImcQuery>;
export type ImcLazyQueryHookResult = ReturnType<typeof useImcLazyQuery>;
export type ImcQueryResult = Apollo.QueryResult<ImcQuery, ImcQueryVariables>;