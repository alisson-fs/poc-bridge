package br.alisson.poc.repository

import br.alisson.poc.model.Imc
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.domain.PageRequest
import java.time.Instant
import java.time.temporal.ChronoUnit
import javax.persistence.EntityManager

@SpringBootTest
class ImcRepositoryIntegrationTest(@Autowired private val imcRepository: ImcRepository, @Autowired private val entityManager: EntityManager) {
    private val altura = 173.0
    private val peso = 72.0
    private val imcValue = 24.06
    private val hoje = Instant.now()
    private val anteontem = hoje.minus(2, ChronoUnit.DAYS)
    private val ontem = hoje.minus(1, ChronoUnit.DAYS)
    private val amanha = hoje.plus(1, ChronoUnit.DAYS)
    private val pageable = PageRequest.of(0, Int.MAX_VALUE)
    val imcHoje = Imc(altura, peso, imcValue, hoje)
    val imcAnteontem = Imc(altura, peso, imcValue, anteontem)
    val imcAmanha = Imc(altura, peso, imcValue, amanha)

    @Test
    fun `save deve persistir o imc`() {
        imcRepository.save(imcHoje)

        assertThat(entityManager.find(Imc::class.java, 1L)).isNotNull
    }

    @Test
    fun `getAllImcs deve retornar todos os imcs`() {
        imcRepository.save(imcAnteontem)
        imcRepository.save(imcHoje)
        imcRepository.save(imcAmanha)

        val result = imcRepository.getAllImcs(pageable)

        assertThat(result).extracting("id").contains(1L, 2L, 3L)
    }

    @Test
    fun `getImcByDataBetween deve retornar todos os imcs dentro das datas`() {
        imcRepository.save(imcAnteontem)
        imcRepository.save(imcHoje)
        imcRepository.save(imcAmanha)

        val result = imcRepository.getImcByDataBetween(start = ontem, end = amanha, pageable=pageable)

        assertThat(result).extracting("id").contains(2L, 3L)
    }

    @Test
    fun `getImcByDataBetween deve retornar todos os imcs a partir da data`() {
        imcRepository.save(imcAnteontem)
        imcRepository.save(imcHoje)
        imcRepository.save(imcAmanha)

        val result = imcRepository.getImcByDataBetween(start = ontem, end=null, pageable=pageable)

        assertThat(result).extracting("id").contains(2L, 3L)
    }

    @Test
    fun `getImcByDataBetween deve retornar todos os imcs antes da data`() {
        imcRepository.save(imcAnteontem)
        imcRepository.save(imcHoje)
        imcRepository.save(imcAmanha)

        val result = imcRepository.getImcByDataBetween(start = null, end=ontem, pageable=pageable)

        assertThat(result).extracting("id").contains(1L)
    }
}
