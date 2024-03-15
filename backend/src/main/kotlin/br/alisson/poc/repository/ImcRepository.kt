package br.alisson.poc.repository

import br.alisson.poc.model.Imc
import br.alisson.poc.model.QImc.imc1
import com.querydsl.jpa.impl.JPAQueryFactory
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Repository
import java.time.Instant
import javax.persistence.EntityManager
import javax.transaction.Transactional

@Repository
class ImcRepository(private val em: EntityManager,) {
    @Transactional
    fun save(imc: Imc) {
        em.persist(imc)
    }

    fun findAll(pageable: Pageable): Page<Imc> {
        val results = JPAQueryFactory(em).selectFrom(imc1).fetch()
        return PageImpl(results, pageable, results.size.toLong())
    }

    fun findByDataBetween(start: Instant?, end: Instant?, pageable: Pageable): Page<Imc> {
        val results = JPAQueryFactory(em).selectFrom(imc1).where(imc1.data.between(start, end)).fetch()
        return PageImpl(results, pageable, results.size.toLong())
    }

}
