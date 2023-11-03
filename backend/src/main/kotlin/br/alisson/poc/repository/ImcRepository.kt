package br.alisson.poc.repository

import br.alisson.poc.model.Imc
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.time.Instant

@Repository
interface ImcRepository: CrudRepository<Imc, Long> {

    fun findAll(pageable: Pageable): Page<Imc>

    fun findByDataBetween(start: Instant?, end: Instant?, pageable: Pageable): Page<Imc>
}
