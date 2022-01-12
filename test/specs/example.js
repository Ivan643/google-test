describe('Verify processing request with valid values', function() {
 
  var request = 'Daimler'; // you can change the request here

  it('should find results after the request processing',async function() {
    await browser.url ("https://www.google.com/"); //open the website
    await browser.keys(request); //enter the request
    var searchButton = await $('input.gNO89b'); 
    await searchButton.click(); //click the "Search in Google" button
  });

  it('should verify that response contains the text of the request', async function() {
    var response = await $('div#search a:nth-child(1) h3');
    await expect(response).toHaveTextContaining(request); // verify that a response contains the request's text
  });
});
