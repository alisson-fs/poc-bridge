package br.alisson.poc

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BootGraphqlApplication

fun main(args: Array<String>) {
    runApplication<BootGraphqlApplication>(*args)
}
