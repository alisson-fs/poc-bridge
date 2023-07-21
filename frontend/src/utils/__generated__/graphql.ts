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

export type HistoricoInput = {
  dataFim?: InputMaybe<Scalars['String']>;
  dataInicio?: InputMaybe<Scalars['String']>;
  tamanho: Scalars['Int'];
};

export type Imc = {
  __typename?: 'Imc';
  altura: Scalars['String'];
  data: Scalars['String'];
  id: Scalars['ID'];
  imc: Scalars['String'];
  peso: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  historico: Array<Imc>;
};


export type QueryHistoricoArgs = {
  input?: InputMaybe<HistoricoInput>;
};

export type HistoricoQueryVariables = Exact<{
  input?: InputMaybe<HistoricoInput>;
}>;


export type HistoricoQuery = { __typename?: 'Query', historico: Array<{ __typename?: 'Imc', id: string, altura: string, peso: string, imc: string, data: string }> };


export const HistoricoDocument = gql`
    query Historico($input: HistoricoInput) {
  historico(input: $input) {
    id
    altura
    peso
    imc
    data
  }
}
    `;

/**
 * __useHistoricoQuery__
 *
 * To run a query within a React component, call `useHistoricoQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoricoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoricoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHistoricoQuery(baseOptions?: Apollo.QueryHookOptions<HistoricoQuery, HistoricoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HistoricoQuery, HistoricoQueryVariables>(HistoricoDocument, options);
      }
export function useHistoricoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HistoricoQuery, HistoricoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HistoricoQuery, HistoricoQueryVariables>(HistoricoDocument, options);
        }
export type HistoricoQueryHookResult = ReturnType<typeof useHistoricoQuery>;
export type HistoricoLazyQueryHookResult = ReturnType<typeof useHistoricoLazyQuery>;
export type HistoricoQueryResult = Apollo.QueryResult<HistoricoQuery, HistoricoQueryVariables>;