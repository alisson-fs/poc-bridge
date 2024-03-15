package br.alisson.poc.service

import br.alisson.poc.model.Imc
import br.alisson.poc.repository.ImcRepository
import br.alisson.poc.util.ImcUtils
import org.slf4j.LoggerFactory
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service
import java.time.Instant

@Service
class ImcService(private val repository: ImcRepository) {

    private val logger = LoggerFactory.getLogger(ImcService::class.java)

    fun calcularPersistirImc(altura: Double, peso: Double): String {
        val imc = ImcUtils.calcular(altura, peso)
        repository.save(Imc(altura, peso, imc, Instant.now()))
        mostrarTbImc()
        return imc.toString()
    }

    private fun mostrarTbImc(){
        val pageable = PageRequest.of(0, Int.MAX_VALUE)
        val tbImc = repository.findAll(pageable).toString()
        logger.debug(tbImc)
    }
}
