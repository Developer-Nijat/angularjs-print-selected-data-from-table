var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  // controller body

  $scope.options = {
    selectedPaymentID: undefined,
    selectedPaymentName: "",
    selectedPaymentCost: "",
    selectedPaymentServiceName: "",
    selectedPaymentServiceCode: "",
  };

  $scope.setSelectedPayment = function (index, payment) {
    $scope.options.selectedPaymentID = index;
    $scope.options.selectedPaymentName = payment.Name;
    $scope.options.selectedPaymentCost = payment.Cost;
    $scope.options.selectedPaymentServiceName = payment.ServiceName;
    $scope.options.selectedPaymentServiceCode = payment.ServiceCode;
  };

  $scope.payments = [
    {
      Id: "0",
      Name: "Nijat Aliyev",
      Cost: "500 AZN",
      ServiceName: "Example Service Name",
      ServiceCode: "14300222",
    },
    {
      Id: "1",
      Name: "Jhon Crus",
      Cost: "100 AZN",
      ServiceName: "Example Service Name",
      ServiceCode: "14300999",
    },
    {
      Id: "2",
      Name: "Bob Marly",
      Cost: "550 AZN",
      ServiceName: "Example Service Name",
      ServiceCode: "14300888",
    },
    {
      Id: "3",
      Name: "Karlie Jhonatan",
      Cost: "5100 AZN",
      ServiceName: "Example Service Name",
      ServiceCode: "14300777",
    },
    {
      Id: "4",
      Name: "Katty Perry",
      Cost: "600 AZN",
      ServiceName: "Example Service Name",
      ServiceCode: "14300111",
    },
  ];

  $scope.export = function () {
    if ($scope.options.selectedPaymentName.length > 1) {
      html2canvas(document.getElementById("exportthis"), {
        onrendered: function (canvas) {
          var docDefinition = {
            content: [
              {
                text: "Main Title",
                style: "header",
              },
              "------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n",
              {
                text: "Payer name:",
                style: "subheader",
              },
              {
                text: $scope.options.selectedPaymentName,
                style: "normal",
              },
              "\n\n",
              {
                text: "Service name:",
                style: "subheader",
              },
              {
                text: $scope.options.selectedPaymentServiceName,
                style: "normal",
              },
              "\n\n",
              {
                text: "Service code:",
                style: "subheader",
              },
              {
                text: $scope.options.selectedPaymentServiceCode,
                style: "normal",
              },
              "\n\n",
              {
                text: "Amount:",
                style: "subheader",
              },
              {
                text: $scope.options.selectedPaymentCost,
                style: "normal",
              },
              "\n\n",
              {
                text: "Example Company Name",
                style: ["quote", "small"],
              },
              {
                text: "© 2020. All rights reserved",
                style: ["quote", "small"],
              },
            ],
            styles: {
              header: {
                fontSize: 20,
                bold: true,
                alignment: "center",
              },
              subheader: {
                fontSize: 16,
                bold: true,
              },
              quote: {
                italics: true,
              },
              normal: {
                fontSize: 12,
              },
              small: {
                fontSize: 8,
              },
            },
          };
          // pdfMake.createPdf(docDefinition).download("test.pdf");
          pdfMake.createPdf(docDefinition).print();
        },
      });
    } else {
      alert("Please select payment");
      return;
    }
  };

  // controller body end
});
