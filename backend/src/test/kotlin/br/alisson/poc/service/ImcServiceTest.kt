package br.alisson.poc.service

import br.alisson.poc.repository.ImcRepository
import br.alisson.poc.util.ImcUtils
import com.nhaarman.mockitokotlin2.any
import io.mockk.every
import io.mockk.mockkObject
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import com.nhaarman.mockitokotlin2.mock
import io.mockk.verify as mockkVerify
import com.nhaarman.mockitokotlin2.verify as nhaarmanVerify
import org.junit.jupiter.api.Assertions.assertEquals

class ImcServiceTest {
    private lateinit var repository: ImcRepository
    private lateinit var service: ImcService

    @BeforeEach
    fun setup() {
        mockkObject(ImcUtils)
        repository = mock()
        service = ImcService(repository)
    }

    @Test
    fun `calcularPersistirImc deve retornar o imc em string`() {
        val altura = 100.0
        val peso = 50.0
        val imc = 50.0
        val expected = imc.toString()
        every { ImcUtils.calcular(altura, peso) } returns imc

        val result = service.calcularPersistirImc(altura, peso)

        mockkVerify{ ImcUtils.calcular(altura, peso) }
        nhaarmanVerify(repository).save(any())
        assertEquals(expected, result)
    }
}