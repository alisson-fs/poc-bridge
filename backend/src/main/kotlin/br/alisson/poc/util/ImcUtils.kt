package br.alisson.poc.util

import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import kotlin.math.pow

class ImcUtils {
    companion object {
        private val PATTERN = "dd/MM/yyyy HH:mm"

        fun calcular(altura: Double, peso: Double): Double {
            return peso / (altura / 100.0).pow(2.0)
        }

        fun formatUsToBr(valor: Double): String {
            val partesValor = valor.toString().split(".")
            return partesValor[0] + "," + partesValor[1]
        }

        fun formatDate(date: Instant): String {
            val formatter = DateTimeFormatter.ofPattern(PATTERN).withZone(ZoneId.systemDefault())
            return formatter.format(date)
        }
    }
}
