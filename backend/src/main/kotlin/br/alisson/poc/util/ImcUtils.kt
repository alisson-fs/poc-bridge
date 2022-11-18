package br.alisson.poc.util

import kotlin.math.pow

class ImcUtils {
    companion object {
        fun calcular(altura: Double, peso: Double): Double {
            return peso / (altura / 100.0).pow(2.0)
        }

        fun formatUsToBr(valor: Double): String {
            val partesValor = valor.toString().split(".")
            return partesValor[0] + "," + partesValor[1]
        }
    }
}
