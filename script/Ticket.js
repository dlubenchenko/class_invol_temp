class Ticket {
	constructor(
		ticket,
		bsr,
		roe,
		fare,
		currency,
		equivalent,
		airlineCurrency,
		doi,
		paxName,
		itinerary,
		taxes,
		total,
		totalTax
	) {
		this.ticket = ticket
		this.bsr = bsr || 1
		this.roe = roe || 1
		this.fare = fare
		this.currency = currency
		this.equivalent = equivalent
		this.airlineCurrency = airlineCurrency
		this.doi = doi
		this.paxName = paxName
		this.itinerary = itinerary
		this.taxes = taxes
		this.total = total
		this.totalTax = totalTax
	}

	splitTicket() {
		return this.ticket
			.split(/\n/gi)
			.map((key) => key.trim())
			.filter((key) => key !== '')
	}

	sumTax() {
		return this.taxes.reduce((acc, key) => {
			return acc + +key.value
		}, 0)
	}

	findSimilar() {
		return this.taxes.map((key, i) => {
			for (let j = i + 1; j < this.taxes.length; j++) {
				const el = this.taxes[j].name
				if (key.name === el) {
					key.value = this.taxes[j].value + key.value
					this.taxes[j].name = ''
					this.taxes[j].value = ''
				}
			}
			return {
				name: key.name,
				value: key.value,
			}
		})
	}
}
