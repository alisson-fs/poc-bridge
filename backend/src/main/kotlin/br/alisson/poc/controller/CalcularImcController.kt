package br.alisson.poc.controller

import br.alisson.poc.ImcUtils
import br.alisson.poc.model.ImcDto
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class CalcularImcController {
    @PostMapping("/calcularImc")
    fun calcularImc(@RequestBody values: ImcDto): Double {
        return ImcUtils.calcular(values.altura, values.peso)
    }
}