$.ajax({
    dataType: "json",
    url: 'https://ltv-data-api.herokuapp.com/api/v1/records.json',
    data: data,
    success: success
  });