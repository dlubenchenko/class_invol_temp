class Gds {
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
		taxes
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
	}

	splitTicket() {
		return this.ticket
			.split(/\n/gi)
			.map((key) => key.trim())
			.filter((key) => key !== '')
	}
}
