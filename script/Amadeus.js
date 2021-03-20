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
		return this.ticket
			.filter(
				(key) =>
					key.includes('FARE') && !key.includes('FE') && key.includes(this.fare)
			)
			.join()
			.split(' ')
			.filter((key) => key.length === 3)
			.join()
	}

	doiInfo() {
		return this.ticket
			.filter((key) => key.includes('DOI-'))
			.map((key) => key.split(' ').filter((key) => key.includes('DOI-')))
			.toString()
			.slice(4)
	}

	paxNameInfo() {
		return this.ticket
			.filter((key) => key.includes('1.') && key.includes('ST'))
			.map((key) =>
				key.split(' ').filter((key) => key !== '' && key.includes('1.'))
			)
			.join()
			.slice(2)
	}

	itineraryInfo() {
		let x =
			this.ticket.indexOf(
				this.ticket
					.filter((key) => key.includes('1.') && key.includes('ST'))
					.join()
			) + 1
		let y = this.ticket.indexOf(
			this.ticket
				.filter((key) => key.includes('FARE') && !key.includes('FE'))
				.join()
		)

		return this.ticket.slice(x, y).map((key) => {
			const fltNum = key.slice(7, 13).replace(' ', ''),
				fltCls = key.slice(16, 17),
				fltDt = key.slice(18, 23),
				fltDep = key.slice(3, 6) || key.slice(0, 3)
			return `${fltNum} ${fltCls} ${fltDt} ${fltDep}`
		})
	}

	taxesInfo() {
		return this.ticket
			.filter((key) => key.includes('TX'))
			.join()
			.replace(/,/g, ' ')
			.split(' ')
			.filter((tax) => tax != '' && tax.slice(0, 2).indexOf('TX'))
			.filter((_key, i) => {
				return i % 2 !== 0
			})
			.map((key) => {
				return {
					name: key.slice(-2),
					value: key.slice(0, -2),
				}
			})
	}

	totalInfo() {
		return this.ticket
			.filter(
				(key) =>
					key.includes('TOTAL') &&
					!key.includes('TOTALTAX') &&
					key.includes(this.currency)
			)
			.join()
			.split(' ')
			.filter((key) => +key > 0)
	}
}

const amadeus = new Amadeus(twdAma)
amadeus.ticket = amadeus.splitTicket()
amadeus.bsr = amadeus.bsrInfo()
amadeus.roe = amadeus.roeInfo()
amadeus.fare = amadeus.fareInfo()
amadeus.currency = amadeus.currencyInfo()
amadeus.equivalent = amadeus.equivalentInfo() + ' ' + amadeus.currency
amadeus.taxes = amadeus.taxesInfo()
amadeus.airlineCurrency = amadeus.airlineCurrencyInfo()
amadeus.totalTax = amadeus.sumTax() + ' ' + amadeus.currency
amadeus.doi = amadeus.doiInfo()
amadeus.paxName = amadeus.paxNameInfo()
amadeus.itinerary = amadeus.itineraryInfo()
amadeus.total = amadeus.totalInfo() + ' ' + amadeus.currency
amadeus.fare = amadeus.fareInfo() + ' ' + amadeus.airlineCurrency

console.log(amadeus)

const output = document.querySelector('#output-info')
output.value =
	Object.keys(amadeus)
		.map((key) => `${key.toUpperCase()} - ${amadeus[key]}\n`)
		.filter(
			(key) =>
				key.indexOf('TICKET') &&
				key.indexOf('ITINERARY') &&
				key.indexOf('TAXES')
		)
		.toString()
		.replace(/,/gi, '') +
	amadeus.taxes
		.map((key) => `${key.value}${key.name}`)
		.toString()
		.replace(/,/gi, ' ')
