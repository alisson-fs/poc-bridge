package br.alisson.poc.repository

import br.alisson.poc.model.Imc
import org.springframework.data.domain.Page
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.awt.print.Pageable

@Repository
interface ImcRepository: CrudRepository<Imc, Long> {

    fun findByAltura(altura: Double, pageble: Pageable): Page<Imc>
}
