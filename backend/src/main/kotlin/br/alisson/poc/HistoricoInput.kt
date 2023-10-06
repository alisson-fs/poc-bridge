package br.alisson.poc

import java.time.Instant

data class HistoricoInput(
        val dataInicio: Instant?,
        val dataFim: Instant?,
        val tamanho: Int
)
