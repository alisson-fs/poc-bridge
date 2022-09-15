package br.alisson.poc

import kotlin.math.pow

class ImcUtils {
    companion object {
        fun calcular(altura: Double, peso: Double): Double {
            if (altura != 0.0) {
                return peso / (altura / 100.0).pow(2.0)
            } else {
                throw IllegalArgumentException("A altura deve ser diferente de zero.")
            }

        }
    }
}