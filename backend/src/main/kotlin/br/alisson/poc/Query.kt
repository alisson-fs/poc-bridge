package br.alisson.poc

import graphql.kickstart.tools.GraphQLQueryResolver

class Query : GraphQLQueryResolver {
    fun helloWorld(): String {
        return "Hello World"
    }
}