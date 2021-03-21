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
		return this.ticket
			.filter((key) => key.includes('TOTAL'))
			.toString()
			.split(' ')
			.filter((key) => key !== '')[1]
			.slice(0, 3)
	}

	equivalentInfo() {
		return
	}

	airlineCurrencyInfo() {
		return
	}

	doiInfo() {
		return this.ticket
			.map((key) => key.split(' ').filter((key) => key.includes('ISSUED:')))
			.filter((key) => key.toString().includes('ISSUED:'))
			.toString()
			.slice(7)
	}

	paxNameInfo() {
		return this.ticket
			.map((key) => key.split(' ').filter((key) => key.includes('NAME:')))
			.filter((key) => key.toString().includes('NAME:'))
			.toString()
			.slice(5)
	}

	itineraryInfo() {
		return
	}

	taxesInfo() {
		return this.ticket
			.filter((key) => key.includes('TAX') && !key.includes('BREAKDOWN'))
			.toString()
			.replace(/TAX/gi, '')
			.replace(/,/gi, '')
			.split(' ')
			.filter((key) => key !== '')
			.map((key) => {
				return {
					name: key.slice(-2),
					value: key.slice(0, -2),
				}
			})
	}

	totalInfo() {
		return
	}
}

const sabre = new Sabre(twdSabre)

sabre.ticket = sabre.splitTicket()
sabre.bsr = sabre.bsrInfo()
sabre.roe = sabre.roeInfo()
sabre.currency = sabre.currencyInfo()
sabre.doi = sabre.doiInfo()
sabre.paxName = sabre.paxNameInfo()
sabre.taxes = sabre.taxesInfo()

console.log(sabre)
