package br.alisson.poc

import br.alisson.poc.model.Imc
import br.alisson.poc.repository.ImcRepository
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class ImcQueryResolver(private val repository: ImcRepository) : GraphQLQueryResolver {
    fun helloWorld(): String {
        return "Hello World"
    }

    fun historico(): MutableIterable<Imc> {
        return repository.findAll()
    }
}