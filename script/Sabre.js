class Sabre extends Gds {
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
}

const sabre = new Sabre(twdAma)
sabre.splitedTicket = sabre.splitTicket()
