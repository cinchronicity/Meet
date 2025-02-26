import puppeteer from 'puppeteer';


describe('Feature 2: Show/Hide Event Details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250 , 
      timeout: 0,
      args: ['--no-sandbox', '--disable-setuid-sandbox']

    });
    page = await browser.newPage();
  });

  afterAll(async () => {  
    if (browser) {
      await browser.close();
    }
  });
  beforeEach(async () => {
    await page.goto('http://localhost:5173/'); 
  });

  // jest.setTimeout(30000);

  test('Scenario 1: An event element is collapsed by default', async () => {
    await page.waitForSelector('.event');

    const eventDetails = await page.$('.eventDetails');
    expect(eventDetails).toBeNull();
  });

  test('Scenario 2: User can expand an event to see details', async () => {
    await page.waitForSelector('.event');

    // user expands details
    await page.click('.event .show-details-btn');
    const eventDetails = await page.$('.eventDetails' , { visible: true });
    expect(eventDetails).not.toBeNull();
  });

  test('Scenario 3: User can collapse an event to hide details', async () => {
    await page.waitForSelector('.event');

    //user expands details
    await page.click('.event .show-details-btn');
    let eventDetails = await page.$('.eventDetails', { visible: true });
    expect(eventDetails).not.toBeNull();

    // user collapses details
    await page.click('.event .show-details-btn');
    eventDetails = await page.$('.eventDetails', { hidden: true });
    expect(eventDetails).toBeNull();
  });

});