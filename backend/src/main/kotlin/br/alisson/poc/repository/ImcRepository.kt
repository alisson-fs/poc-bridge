package br.alisson.poc.repository

import br.alisson.poc.model.Imc
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ImcRepository: CrudRepository<Imc, Long> {

    fun findAll(pageble: Pageable): Page<Imc>
}
