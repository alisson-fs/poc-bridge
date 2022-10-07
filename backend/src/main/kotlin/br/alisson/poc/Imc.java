package br.alisson.poc;

import java.time.Instant;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "tb_imc")
public class Imc {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "co_imc", nullable = false, unique = false)
	private Long id;

	@Column(name = "nu_altura", nullable = false, unique = false)
	private Double altura;

	@Column(name = "nu_peso", nullable = false, unique = false)
	private Double peso;

	@Column(name = "nu_imc", nullable = false, unique = false)
	private Double imc;

	@Column(name = "dt_calculo", nullable = false, unique = false)
	private Instant dt_calculo;

	protected Imc() {}

	public Imc(Double altura, Double peso, Double imc, Instant dt_calculo) {
		this.altura = altura;
		this.peso = peso;
		this.imc = imc;
		this.dt_calculo = dt_calculo;
	}

	@Override
	public String toString() {
		return String.format("IMC(co_imc=%s, nu_altura=%s, nu_peso=%s, nu_imc=%s, dt_calculo=%s", id, altura, peso, imc, dt_calculo);
	}
}
