package br.alisson.poc

import br.alisson.poc.ImcUtils.Companion.calcular
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class ImcUtilsTest {
    @Test
    fun `calcular deve retornar o imc esperado`() {
        val peso = 10.0
        val altura = 50.0

        val result = calcular(altura, peso)

        assertEquals(40.0, result)
    }
}