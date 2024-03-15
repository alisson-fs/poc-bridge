package br.alisson.poc

import br.alisson.poc.model.Imc
import br.alisson.poc.repository.ImcRepository
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Component

@Component
class ImcQueryResolver(private val repository: ImcRepository) : GraphQLQueryResolver {

    fun historico(input: HistoricoInput): Page<Imc> {
        val pageable = PageRequest.of(0, input.tamanho)
        return if (input.dataInicio != null || input.dataFim != null) {
            repository.findByDataBetween(input.dataInicio, input.dataFim, pageable)
        } else {
            repository.findAll(pageable)
        }
    }
}
