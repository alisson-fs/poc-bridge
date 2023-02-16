package br.alisson.poc

import br.alisson.poc.model.Imc
import br.alisson.poc.repository.ImcRepository
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class ImcQueryResolver(private val repository: ImcRepository) : GraphQLQueryResolver {

    fun historico(tamanho: Int): List<Imc> {
        var size = tamanho
        val all = repository.findAll()
        if (size > all.count()) { size = all.count() }
        return all.toList().subList(0, size)
    }
}