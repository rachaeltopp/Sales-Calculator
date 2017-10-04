var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var result = {};

  for (var i = 0; i < companySalesData.length; i ++) {
    var currentCompany = companySalesData[i];
    var sales = 0;

    for (var j = 0; j < currentCompany.sales.length; j++) {
      sales += currentCompany.sales[j];
    }

    var taxes = sales * salesTaxRates[currentCompany.province];

    if (currentCompany.name in result) {
      result[currentCompany.name].totalSales += sales;
      result[currentCompany.name].totalTaxes += taxes;
    } else {
      result[currentCompany.name] = {
        totalSales: sales,
        totalTaxes: taxes
      };
    }

  }
  return result
}


calculateSalesTax(companySalesData, salesTaxRates);



var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/