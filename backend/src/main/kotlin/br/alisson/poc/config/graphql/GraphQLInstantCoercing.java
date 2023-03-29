package br.ufsc.bridge.pec.backend.app.config.graphql.types;

import java.math.BigInteger;
import java.time.Instant;

import org.jetbrains.annotations.NotNull;

import graphql.language.IntValue;
import graphql.schema.Coercing;

public class GraphQLInstantCoercing implements Coercing<Instant, Long> {

	@Override
	public Long serialize(@NotNull Object input) {
		if (input instanceof Instant) {
			return ((Instant) input).toEpochMilli();
		}
		return null;
	}

	@NotNull
	@Override
	public Instant parseValue(@NotNull Object input) {
		if (input instanceof Long) {
			return Instant.ofEpochMilli((Long) input);
		}
		return null;
	}

	@NotNull
	@Override
	public Instant parseLiteral(@NotNull Object input) {
		if (!(input instanceof IntValue)) {
			return null;
		}

		BigInteger istant = ((IntValue) input).getValue();
		return this.parseValue(istant.longValueExact());
	}
}