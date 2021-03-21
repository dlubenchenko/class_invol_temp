class Sabre extends Ticket {
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
		super(
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
		)
	}

	bsrInfo() {
		if (this.ticket.find((key) => key.includes('BSR'))) {
			return +this.ticket
				.filter((key) => key.includes('BSR'))
				.toString()
				.split(' ')
				.filter((key) => key.includes('BSR'))[0]
				.slice(3)
		}
		return 1 // +(this.equivalent.slice(0, -4) / this.fare.slice(0, -4)).toFixed(7)
	}

	roeInfo() {
		return +this.ticket
			.filter((key) => key.includes('ROE'))
			.toString()
			.split(' ')
			.filter((key) => key.includes('ROE'))[0]
			.slice(3)
	}

	fareInfo() {
		return
	}

	currencyInfo() {
		return
	}

	equivalentInfo() {
		return
	}

	airlineCurrencyInfo() {
		return
	}

	doiInfo() {
		return
	}

	paxNameInfo() {
		return
	}

	itineraryInfo() {
		return
	}

	taxesInfo() {
		return
	}

	totalInfo() {
		return
	}
}

const sabre = new Sabre(twdSabre)

sabre.ticket = sabre.splitTicket()
sabre.bsr = sabre.bsrInfo()
sabre.roe = sabre.roeInfo()

console.log(sabre)
