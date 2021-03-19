class Amadeus extends Gds {
	constructor(
		ticket,
		bsr,
		roe,
		fare,
		currency,
		airlineFare,
		airlineCurrency,
		doi,
		paxName,
		itinerary,
		taxes
	) {
		super(
			ticket,
			bsr,
			roe,
			fare,
			currency,
			airlineFare,
			airlineCurrency,
			doi,
			paxName,
			itinerary,
			taxes
		)
	}

	bsrInfo() {
		// console.log(this.ticket)
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
}

const amadeus = new Amadeus(twdAma)
amadeus.ticket = amadeus.splitTicket()
amadeus.bsr = amadeus.bsrInfo()
amadeus.roe = amadeus.roeInfo()
amadeus.fare = amadeus.fareInfo()

console.log(amadeus)

const output = document.querySelector('#output-info')

output.value = Object.keys(amadeus)
	.map((key) => `${key.toUpperCase()} - ${amadeus[key]} \n`)
	.filter((key) => key.indexOf('TICKET'))
	.toString()
	.replace(/,/gi, '')
