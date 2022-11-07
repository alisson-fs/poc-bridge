package br.alisson.poc.model;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor
@Entity
@Table(name = "tb_imc")
public class Imc {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "co_imc", nullable = false, unique = true)
	private Long id;

	@Column(name = "nu_altura", nullable = false)
	private Double altura;

	@Column(name = "nu_peso", nullable = false)
	private Double peso;

	@Column(name = "nu_imc", nullable = false)
	private Double imc;

	@Column(name = "dt_calculo", nullable = false)
	private Instant dt_calculo;

	public Imc(Double altura, Double peso, Double imc, Instant dt_calculo) {
		this.altura = altura;
		this.peso = peso;
		this.imc = imc;
		this.dt_calculo = dt_calculo;
	}
}
