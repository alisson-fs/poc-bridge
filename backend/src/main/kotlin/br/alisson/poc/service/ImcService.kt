package br.alisson.poc.service

import br.alisson.poc.repository.ImcRepository
import br.alisson.poc.util.ImcUtils
import br.alisson.poc.model.Imc
import org.springframework.stereotype.Service
import java.time.Instant

@Service
class ImcService(private val repository: ImcRepository) {

    fun calcularPersistirImc(altura: Double, peso: Double): String {
        val imc = ImcUtils.calcular(altura, peso)
        repository.save(Imc(altura, peso, imc, Instant.now()))
        mostrarTbImc()
        return imc.toString()
    }

    private fun mostrarTbImc(){
        val tbImc = repository.findAll().toString()
        println(tbImc)
    }
}