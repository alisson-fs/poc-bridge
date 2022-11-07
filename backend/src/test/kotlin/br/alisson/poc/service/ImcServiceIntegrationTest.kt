package br.alisson.poc.service

import br.alisson.poc.model.Imc
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import javax.persistence.EntityManager

@SpringBootTest
class ImcServiceIntegrationTest(@Autowired private val service: ImcService, @Autowired private val entityManager: EntityManager) {

    @Test
    fun `calcularPersistirImc deve retornar o imc correto e persistir o resultado na tabela`() {
        val altura = 100.0
        val peso = 50.0
        val expected = "50.0"

        val result = service.calcularPersistirImc(altura, peso)

        assertEquals(expected, result)
        assertThat(entityManager.find(Imc::class.java, 1L)).isNotNull
    }
}