class Fqq {
	constructor(fqq, usedTaxes) {
		this.fqq = fqq
		this.usedTaxes = usedTaxes
	}
	usedTx() {
		return this.fqq.filter(
			(tax) => tax.includes(amadeus.currency) && tax.includes('-')
		)
	}
}
