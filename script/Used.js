const used = new Fqq(twdAmaFQQ)

used.ticket = used.splitTicket()
used.usedTaxes = used.usedTx()
used.usedTaxes = used.findSimilar()
used.totalUsedTax = used.sumTax()

// console.log(used)
