package br.alisson.poc.controller

import br.alisson.poc.model.Imc
import br.alisson.poc.model.ImcDto
import br.alisson.poc.repository.ImcRepository
import br.alisson.poc.service.ImcService
import com.nhaarman.mockitokotlin2.any
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import java.time.Instant
import javax.persistence.EntityManager
import javax.persistence.EntityManagerFactory
import javax.persistence.PersistenceContext

@SpringBootTest
class CalcularImcControllerIntegrationTest(@Autowired private val controller: CalcularImcController, @Autowired private val entityManager: EntityManager) {


    @Test
    fun `calcularImc deve retornar um ResponseEntity com o imc correto e HttpStatus OK`() {
        val altura = 100.0
        val peso = 50.0
        val imc = 50.0
        val expected = ResponseEntity(imc.toString(), HttpStatus.OK)

        val result = controller.calcularImc(ImcDto(altura, peso))

        assertEquals(expected, result)
        assertThat(entityManager.find(Imc::class.java, 1L)).isNotNull
    }

    @Test
    fun `calcularImc deve retornar um ResponseEntity com erro e HttpStatus BAD_REQUEST quando altura eh 0`() {
        val altura = 0.0
        val peso = 50.0
        val expected = ResponseEntity("Os valores devem ser maiores do que zero.", HttpStatus.BAD_REQUEST)

        val result = controller.calcularImc(ImcDto(altura, peso))

        assertEquals(expected, result)
    }

    @Test
    fun `calcularImc deve retornar um ResponseEntity com erro e HttpStatus BAD_REQUEST quando peso eh 0`() {
        val altura = 100.0
        val peso = 0.0
        val expected = ResponseEntity("Os valores devem ser maiores do que zero.", HttpStatus.BAD_REQUEST)

        val result = controller.calcularImc(ImcDto(altura, peso))

        assertEquals(expected, result)
    }
}
