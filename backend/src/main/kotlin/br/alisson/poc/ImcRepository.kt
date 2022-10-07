package br.alisson.poc

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ImcRepository: CrudRepository<Imc, Long> {
}