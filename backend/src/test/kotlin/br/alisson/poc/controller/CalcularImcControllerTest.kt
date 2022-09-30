package br.alisson.poc.controller

import br.alisson.poc.model.ImcDto
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class CalcularImcControllerTest {
    private val controller = CalcularImcController()

    // @Test
    // fun `calcularImc deve chamar o metodo calcular do ImcUtils quando altura e peso forem meior que zero`() {
    //     val imcUtils: ImcUtils = mock()
    //     val altura = 50.0
    //     val peso = 10.0
    //
    //     controller.calcularImc(ImcDto(altura, peso))
    //
    //     verify(imcUtils).calcular(altura, peso)
    // }

    @Test
    fun `calcularImc deve retornar erro quando altura for zero`() {
        val result = controller.calcularImc(ImcDto(altura = 0.0, peso = 10.0))

        assertEquals("Os valores devem ser maiores do que zero.", result.body)
    }

    @Test
    fun `calcularImc deve retornar erro quando peso for zero`() {
        val result = controller.calcularImc(ImcDto(altura = 50.0, peso = 0.0))

        assertEquals("Os valores devem ser maiores do que zero.", result.body)
    }

    @Test
    fun `calcularImc deve retornar erro quando altura e peso forem zero`() {
        val result = controller.calcularImc(ImcDto(altura = 0.0, peso = 0.0))

        assertEquals("Os valores devem ser maiores do que zero.", result.body)
    }
}