describe('Verify processing request with valid values', function() {

  it('should find results after the request processing',async function() {
    await browser.url ("https://www.google.com/"); //open the website "https://www.google.com/"
    await browser.keys('test123'); //type value "test123" in the search field
    await browser.pause(3000); //pause 3s
    const searchButton = await $('input.gNO89b'); 
    await searchButton.click(); //click the "Search in Google" button
    await browser.pause(3000); //pause 3s
  });

});
