class Amadeus extends Gds {
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
		return +this.ticket
			.filter((key, i) => key.includes('BSR'))[0]
			.split(' ')
			.filter((key) => key !== '')[
			this.ticket
				.filter((key, i) => key.includes('BSR'))[0]
				.split(' ')
				.filter((key) => key !== '')
				.indexOf('BSR') + 1
		]
	}

	roeInfo() {
		return +this.ticket
			.map((key) => key.split(' ').filter((key) => key.includes('ROE')))
			.join()
			.split(',')
			.filter((key) => key !== '')
			.toString()
			.slice(3)
	}

	fareInfo() {
		return +this.ticket
			.filter((key) => key.includes('FARE') && !key.includes('FE'))
			.join()
			.split(' ')
			.filter((key) => +key > 0)
	}

	currencyInfo() {
		return this.ticket
			.filter((key) => key.includes('TOTAL') && !key.includes('TOTALTAX'))
			.join()
			.split(' ')
			.filter(
				(key) =>
					!key.includes('TOTAL') && !+key && key !== '' && key.length === 3
			)
			.toString()
	}

	equivalentInfo() {
		return (
			this.ticket
				.filter((key) => key.includes('EQUIV'))
				.join()
				.split(' ')
				.filter((key) => !key.includes(this.bsr) && +key) ||
			this.total - this.totalTax
		)
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
		return this.ticket
			.filter((key) => key.includes('TX'))
			.join()
			.replace(/,/g, ' ')
			.split(' ')
			.filter((tax) => tax != '' && tax.slice(0, 2).indexOf('TX'))
			.filter((key, i) => i % 2 !== 0)
	}
}

const amadeus = new Amadeus(twdAma)
amadeus.ticket = amadeus.splitTicket()
amadeus.bsr = amadeus.bsrInfo()
amadeus.roe = amadeus.roeInfo()
amadeus.fare = amadeus.fareInfo()
amadeus.currency = amadeus.currencyInfo()
amadeus.equivalent = amadeus.equivalentInfo() + amadeus.currency
amadeus.taxes = amadeus.taxesInfo()
amadeus.totalTax = amadeus.sumTax() + amadeus.currency

amadeus.sumTax()

console.log(amadeus)

const output = document.querySelector('#output-info')
output.value = Object.keys(amadeus)
	.map((key) => `${key.toUpperCase()} - ${amadeus[key]}\n`)
	.filter((key) => key.indexOf('TICKET'))
	.toString()
	.replace(/,/gi, '')
