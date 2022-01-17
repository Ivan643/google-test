describe('Verify processing request with valid values', function() {
 
  var request = 'Daimler';

  it('should find results after the request processing', async function() {
    await browser.url ("https://www.google.com/"); 
    await browser.keys(request); 
    await $('input.gNO89b').click(); 
  });

  it('should verify that response contains the text of the request', async function() {
    var response = await $('div#search a:nth-child(1) h3');
    await expect(response).toHaveTextContaining(request); 
  });
});
