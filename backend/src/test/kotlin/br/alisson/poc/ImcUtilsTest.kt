package br.alisson.poc

import br.alisson.poc.ImcUtils.Companion.calcular
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows

class ImcUtilsTest {
    @Test
    fun `calcular deve retornar o imc esperado`() {
        val peso = 10.0
        val altura = 50.0

        val result = calcular(altura, peso)

        assertEquals(40.0, result)
    }

    @Test
    fun `calcular deve retornar uma excecao caso a altura seja zero`() {
        val peso = 10.0
        val altura = 0.0

        val exception = assertThrows<IllegalArgumentException>{
            calcular(altura, peso)
        }

        assertEquals("A altura deve ser diferente de zero.", exception.message)
    }
}