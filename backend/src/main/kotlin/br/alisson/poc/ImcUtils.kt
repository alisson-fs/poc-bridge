package br.alisson.poc

import kotlin.math.pow

class ImcUtils {
    companion object {
        fun calcular(altura: Double, peso: Double): Double {
            return peso / (altura / 100.0).pow(2.0)
        }
    }
}