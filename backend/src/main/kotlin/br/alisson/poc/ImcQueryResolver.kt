package br.alisson.poc

import br.alisson.poc.model.Imc
import br.alisson.poc.repository.ImcRepository
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Component
import java.util.Date

@Component
class ImcQueryResolver(private val repository: ImcRepository) : GraphQLQueryResolver {

    fun historico(tamanho: Int): Page<Imc> {
        val pageable = PageRequest.of(0, tamanho)
        return repository.findAll(pageable)
    }

    fun historicoBetween(inicio: Date, fim: Date, tamanho: Int): Page<Imc> {
        val pageable = PageRequest.of(0, tamanho)
        return repository.findByDataBetween(inicio, fim, pageable)
    }
}