// class Fqq {
// 	constructor(ticket, usedTaxes, totalUsedTax) {
// 		this.ticket = ticket
// 		this.usedTaxes = usedTaxes
// 		this.totalUsedTax = totalUsedTax
// 	}
// 	usedTx() {
// 		return this.ticket
// 			.filter((tax) => tax.includes(amadeus.currency) && tax.includes('-'))
// 			.join()
// 			.replace(/,/g, ' ')
// 			.split(' ')
// 			.filter(
// 				(tax) =>
// 					tax != '' &&
// 					tax.indexOf(amadeus.currency) &&
// 					!tax.slice(-3, -2).indexOf('-') &&
// 					tax.slice(-2).indexOf('XT')
// 			)
// 			.map((tax) => {
// 				return {
// 					name: tax.slice(-2),
// 					value: +tax.slice(0, -3),
// 				}
// 			})
// 	}

// 	splitTicket() {
// 		return this.ticket
// 			.split(/\n/gi)
// 			.map((key) => key.trim())
// 			.filter((key) => key !== '')
// 	}

// 	findSimilar() {
// 		return this.usedTaxes.map((key, i) => {
// 			for (let j = i + 1; j < this.usedTaxes.length; j++) {
// 				const el = this.usedTaxes[j].name
// 				if (key.name === el) {
// 					key.value = this.usedTaxes[j].value + key.value
// 					this.usedTaxes[j].name = ''
// 					this.usedTaxes[j].value = ''
// 				}
// 			}
// 			return {
// 				name: key.name,
// 				value: key.value,
// 			}
// 		})
// 	}

// 	sumTax() {
// 		return this.usedTaxes.reduce((acc, key) => {
// 			return acc + +key.value
// 		}, 0)
// 	}
// }
