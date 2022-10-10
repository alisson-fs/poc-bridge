package br.alisson.poc.controller

import br.alisson.poc.service.ImcService
import br.alisson.poc.model.ImcDto
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.whenever
import com.nhaarman.mockitokotlin2.verify
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity

class CalcularImcControllerTest {
    private val responseEntityError = ResponseEntity("Os valores devem ser maiores do que zero.", HttpStatus.BAD_REQUEST)

    private lateinit var service: ImcService
    private lateinit var controller: CalcularImcController

    @BeforeEach
    fun setup() {
        service = mock()
        controller = CalcularImcController(service)
    }


    @Test
    fun `calcularImc deve chamar o metodo calcular do ImcUtils quando altura e peso forem meior que zero`() {
        val altura = 100.0
        val peso = 50.0
        val imc = "50.0"
        val expected = ResponseEntity(imc, HttpStatus.OK)
        whenever(service.calcularPersistirImc(altura, peso)).thenReturn(imc)

        val result = controller.calcularImc(ImcDto(altura, peso))

        verify(service).calcularPersistirImc(altura, peso)
        assertEquals(expected, result)
    }

    @Test
    fun `calcularImc deve retornar erro quando altura for zero`() {
        val result = controller.calcularImc(ImcDto(altura = 0.0, peso = 10.0))

        assertEquals(responseEntityError, result)
    }

    @Test
    fun `calcularImc deve retornar erro quando peso for zero`() {
        val result = controller.calcularImc(ImcDto(altura = 50.0, peso = 0.0))

        assertEquals(responseEntityError, result)
    }
}