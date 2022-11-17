package br.alisson.poc

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class Query : GraphQLQueryResolver {
    fun helloWorld(): String {
        return "Hello World"
    }
}