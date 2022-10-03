package br.alisson.poc.controller

import br.alisson.poc.ImcUtils
import br.alisson.poc.model.ImcDto
import io.mockk.every
import io.mockk.mockkObject
import io.mockk.verify
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity

class CalcularImcControllerTest {
    private val controller = CalcularImcController()
    private val responseEntityError = ResponseEntity("Os valores devem ser maiores do que zero.", HttpStatus.BAD_REQUEST)

    @Test
    fun `calcularImc deve chamar o metodo calcular do ImcUtils quando altura e peso forem meior que zero`() {
        mockkObject(ImcUtils)
        val altura = 50.0
        val peso = 10.0
        val imc = 1000.0
        val expected = ResponseEntity(imc.toString(), HttpStatus.OK)
        every { ImcUtils.calcular(altura, peso) } returns imc

        val result = controller.calcularImc(ImcDto(altura, peso))

        verify{ ImcUtils.calcular(altura, peso) }
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