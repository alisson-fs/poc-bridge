package br.alisson.poc

import kotlin.math.pow

class ImcUtils {
    companion object {
        fun calcularImc(altura: Double, peso: Double): Double {
            return peso / (altura / 100).pow(2.0)
        }
    }
}