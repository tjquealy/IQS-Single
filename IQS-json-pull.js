window.Webflow ||= [];
window.Webflow.push(() => {
  // Your JSON data

  // Get all CMS data from the page
  // Parse the JSON data
  // Create a new FlashCard instance using the question and answer from the JSON data
  // Add the new FlashCard instance to the cards array

  let cmsData = document.querySelectorAll('[data-schools="info"]');
  console.log(cmsData);

  let jsonData = [];

  let getData = function () {
    let cmsData = document.querySelectorAll('[data-schools="info"]');
    console.log(cmsData);
    cmsData.forEach((card) => {
      const json = JSON.parse(card.innerHTML);
      jsonData.push(json);
    });
  };

  getData();

  //   const jsonData = {
  //     schools : [
  //       {
  //         "Name": "Aim Academy",
  //         "Slug": "aim-academy",
  //         "YearStarted": 2021,
  //         "Model": "STEM, Culturally Responsive",
  //         "ContactPhone": "612-452-2274",
  //         "Website": "https://www.aimacademymn.org/",
  //         "Latitude": 44.9507264,
  //         "Longitude": -93.2565603,
  //         "City": "Minneapolis",
  //         "Levels": "Middle, High"
  //       },
  //       {
  //         "Name": "Bdote Learning Center",
  //         "Slug": "bdote-learning-center",
  //         "YearStarted": 2014,
  //         "Model": "Language Immersion",
  //         "ContactPhone": "612-729-9266",
  //         "Website": "http://bdotelearningcenter.org/",
  //         "Latitude": 44.9503185,
  //         "Longitude": -93.224992,
  //         "City": "Minneapolis",
  //         "Levels": "Elementary"
  //       },
  //       {
  //         "Name": "Beacon Academy",
  //         "Slug": "beacon-academy",
  //         "YearStarted": 2004,
  //         "Model": "Spanish-immersion, Core knowledge",
  //         "ContactPhone": "763-546-9999",
  //         "Website": "http://beaconacademy.com/",
  //         "Latitude": 45.0184866,
  //         "Longitude": -93.3709667,
  //         "City": "Crystal",
  //         "Levels": "Elementary, Middle"
  //       },
  //       {
  //         "Name": "BlueSky Charter School",
  //         "Slug": "bluesky-charter-school",
  //         "YearStarted": 2000,
  //         "Model": "Online",
  //         "ContactPhone": "651-642-0888",
  //         "Website": "http://www.blueskyschool.org/",
  //         "Latitude": 44.8516397,
  //         "Longitude": -93.2438738,
  //         "City": "Bloomington",
  //         "Levels": "Middle, High"
  //       },
  //       {
  //         "Name": "Cross River Charter School",
  //         "Slug": "cross-river-charter-school",
  //         "YearStarted": 2021,
  //         "Model": "Oral Language, Skills Citizenship",
  //         "ContactPhone": "651-346-0091",
  //         "Website": "https://crossrivercs.org/",
  //         "Latitude": 44.8410582,
  //         "Longitude": -92.9865294,
  //         "City": "St. Paul Park",
  //         "Levels": "Elementary"
  //       },
  //       {
  //         "Name": "Cyber Village Academy",
  //         "Slug": "cyber-village-academy",
  //         "YearStarted": 1998,
  //         "Model": "Blended, Online",
  //         "ContactPhone": "651-523-7170",
  //         "Website": "http://cybervillageacademy.org/",
  //         "Latitude": 44.902126,
  //         "Longitude": -93.2173308,
  //         "City": "Minneapolis",
  //         "Levels": "Elementary, Middle, High"
  //       },
  //       {
  //         "Name": "DPSA: North Star Academy",
  //         "Slug": "dpsa-north-star-academy",
  //         "YearStarted": 1997,
  //         "Model": "Response to Intervention",
  //         "ContactPhone": "218-728-9556",
  //         "Website": "http://www.duluthedison.com/",
  //         "Latitude": 46.8275677,
  //         "Longitude": -92.1340559,
  //         "City": "Duluth",
  //         "Levels": "Elementary, Middle"
  //       },
  //       {
  //         "Name": "DPSA: Raleigh Academy",
  //         "Slug": "dpsa-raleigh-academy",
  //         "YearStarted": 1997,
  //         "Model": "Response to Intervention",
  //         "ContactPhone": "218-628-0697",
  //         "Website": "http://www.duluthedison.com/",
  //         "Latitude": 46.7315992,
  //         "Longitude": -92.1723163,
  //         "City": "Duluth",
  //         "Levels": "Elementary, Middle"
  //       },
  //       {
  //         "Name": "ECHO Charter School",
  //         "Slug": "echo-charter-school",
  //         "YearStarted": 1997,
  //         "Model": "Core Knowledge, Culturally Responsive, PBL",
  //         "ContactPhone": "507-925-4143",
  //         "Website": "http://www.isd4026.org/",
  //         "Latitude": 44.617944,
  //         "Longitude": -95.4100724,
  //         "City": "Echo",
  //         "Levels": "Elementary, Middle, High"
  //       },
  //       {
  //         "Name": "EdVisions Off Campus",
  //         "Slug": "edvisions-off-campus",
  //         "YearStarted": 2005,
  //         "Model": "Online, PBL",
  //         "ContactPhone": "507-248-3101",
  //         "Website": "http://www.edvisionshighschool.com/",
  //         "Latitude": 44.5282971,
  //         "Longitude": -93.9077438,
  //         "City": "Henderson",
  //         "Levels": "Middle, High"
  //       },
  //       {
  //         "Name": "Gentry Academy",
  //         "Slug": "gentry-academy",
  //         "YearStarted": 2021,
  //         "Model": "Leadership, STEM",
  //         "ContactPhone": "651-604-8300",
  //         "Website": "https://gentryacademy.com/",
  //         "Latitude": 45.0498111,
  //         "Longitude": -93.0409191,
  //         "City": "Vadnais Heights",
  //         "Levels": "Middle, High"
  //       },
  //       {
  //         "Name": "International Spanish Language Academy",
  //         "Slug": "international-spanish-language-academy",
  //         "YearStarted": 2007,
  //         "Model": "Langauge Immersion, IB",
  //         "ContactPhone": "International Baccalaureate",
  //         "Website": "http://isla-academy.org/",
  //         "Latitude": 44.8960198,
  //         "Longitude": -93.4197104,
  //         "City": "Minnetonka",
  //         "Levels": "Elementary"
  //       },
  //       {
  //         "Name": "Kalon Prep Academy",
  //         "Slug": "kalon-prep-academy",
  //         "YearStarted": 2021,
  //         "Model": "Strengths-based, Whole-child, College & Career",
  //         "ContactPhone": "(320) 460-8881",
  //         "Website": "https://www.kalonprep.org/",
  //         "Latitude": 45.8690046,
  //         "Longitude": -95.3824776,
  //         "City": "Alexandria",
  //         "Levels": "High"
  //       },
  //       {
  //         "Name": "Kandiyohi Academy",
  //         "Slug": "kandiyohi-academy",
  //         "YearStarted": 2022,
  //         "Model":

  //      "STEM, Culturally Responsive",
  //         "ContactPhone": "612-501-0641",
  //         "Website": "https://www.kandiyohiacademy.org/",
  //         "Latitude": 45.0754295,
  //         "Longitude": -95.0509212,
  //         "City": "Willmar",
  //         "Levels": "Elementary, Middle, High"
  //       },
  //       {
  //         "Name": "Level Up Academy",
  //         "Slug": "level-up-academy",
  //         "YearStarted": 2015,
  //         "Model": "STEM, Blended, Individualized",
  //         "ContactPhone": "651-408-5559",
  //         "Website": "https://levelupacademy.org/",
  //         "Latitude": 45.0496059,
  //         "Longitude": -92.9906616,
  //         "City": "White Bear Lake",
  //         "Levels": "Elementary, Middle"
  //       },
  //       {
  //         "Name": "Minnesota Excellence in Learning Academy",
  //         "Slug": "minnesota-excellence-in-learning-academy",
  //         "YearStarted": 2015,
  //         "Model": "Literacy-focused, MTSS",
  //         "ContactPhone": "763-205-4396",
  //         "Website": "http://www.melaschool.org/",
  //         "Latitude": 45.1188019,
  //         "Longitude": -93.4853195,
  //         "City": "Maple Grove",
  //         "Levels": "Prekindergarten, Elementary"
  //       },
  //       {
  //         "Name": "Minnesota New Country School",
  //         "Slug": "minnesota-new-country-school",
  //         "YearStarted": 1994,
  //         "Model": "PBL",
  //         "ContactPhone": "507-248-3353",
  //         "Website": "https://newcountryschool.com/",
  //         "Latitude": 44.5290276,
  //         "Longitude": -93.9036421,
  //         "City": "Henderson",
  //         "Levels": "Elementary, Middle, High"
  //       },
  //       {
  //         "Name": "Modern Montessori",
  //         "Slug": "modern-montessori",
  //         "YearStarted": 2019,
  //         "Model": "STEM, Montessori",
  //         "ContactPhone": "612-440-0681",
  //         "Website": "https://modernmontessoricharter.org/",
  //         "Latitude": 45.188883,
  //         "Longitude": -93.400315,
  //         "City": "Champlin",
  //         "Levels": "Prekindergarten, Prekindergarten-Grade 5"
  //       },
  //       {
  //         "Name": "Nasha Shkola",
  //         "Slug": "nasha-shkola",
  //         "YearStarted": 2012,
  //         "Model": "Language Immersion",
  //         "ContactPhone": "763-496-5550",
  //         "Website": "http://nashashkolamn.org/",
  //         "Latitude": 45.1083484,
  //         "Longitude": -93.3675084,
  //         "City": "Brooklyn Park",
  //         "Levels": "Elementary, Middle"
  //       },
  //       {
  //         "Name": "Paladin Career & Technical High School",
  //         "Slug": "paladin-career-technical-high-school",
  //         "YearStarted": 2003,
  //         "Model": "PBL, Work-Based Learning, Experiential",
  //         "ContactPhone": "763-786-4799",
  //         "Website": "http://www.paladincareertech.com/",
  //         "Latitude": 45.1566486,
  //         "Longitude": -93.276384,
  //         "City": "Blaine",
  //         "Levels": "High"
  //       },
  //       {
  //         "Name": "Prodeo Academy",
  //         "Slug": "prodeo-academy",
  //         "YearStarted": 2013,
  //         "Model": "Literacy-Focused",
  //         "ContactPhone": "763-205-9950",
  //         "Website": "https://prodeoacademy.org",
  //         "Latitude": 45.0439191,
  //         "Longitude": -93.2619188,
  //         "City": "Columbia Heights",
  //         "Levels": "Elementary, Middle"
  //       },
  //       {
  //         "Name": "Progeny Academy",
  //         "Slug": "progeny-academy",
  //         "YearStarted": 2019,
  //         "Model": "STEM, Social Emotional Learning",
  //         "ContactPhone": "(763) 325-9150",
  //         "Website": "http://www.progenyacademy.org/",
  //         "Latitude": 45.0632355,
  //         "Longitude": -93.3262265,
  //         "City": "Brooklyn Center",
  //         "Levels": "Middle"
  //       },
  //       {
  //         "Name": "Sisu Environmental School",
  //         "Slug": "sisu-environmental-school",
  //         "YearStarted": 2022,
  //         "Model": "Environmental, Finnish Model",
  //         "ContactPhone": "651-890-6988",
  //         "Website": "http://sisumn.org/",
  //         "Latitude": 44.827278,
  //         "Longitude": -94.497869,
  //         "City": "Hutchinson",
  //         "Levels": "Elementary"
  //       },
  //       {
  //         "Name": "St. Paul City School",
  //         "Slug": "st-paul-city-school",
  //         "YearStarted": 2010,
  //         "Model": "Core Knowledge",
  //         "ContactPhone": "651-225-9177",
  //         "Website": "https://www.stpaulcityschool.org/",
  //         "Latitude": 44.9582633,
  //         "Longitude": -93.1111576,
  //         "City": "St. Paul",
  //         "Levels": "Elementary, Middle"
  //       },
  //       {
  //         "Name": "St. Paul School of Northern Lights",
  //         "Slug": "st-paul-school-of-northern-lights",
  //         "YearStarted": null,
  //         "Model": "Inquiry-based",
  //         "ContactPhone": "651-285-4672",
  //         "Website": "https://www.schoolofnorthernlights.org/",
  //         "Latitude": 44.9281345,
  //         "Longitude": -93.1278659,
  //         "City": "St. Paul",
  //         "Levels": "Elementary"
  //       },
  //       {
  //         "Name": "STEP Academy",
  //         "Slug": "step-academy",
  //         "YearStarted": 2011,
  //         "Model": "STEM, Response to Intervention, PSEO",
  //         "ContactPhone": "651-289-6120",
  //         "Website": "https://stepacademymn.org/",
  //         "Latitude": 44.9597532,
  //         "Longitude": -93.0651158,
  //         "City": "Saint Paul",
  //         "Levels": "Middle, High"
  //       },
  //       {
  //       "Name": "Success Academy",
  //       "Slug": "success-academy",
  //       "YearStarted": 2016,
  //       "Model": "STEM",
  //       "ContactPhone": "612-876-3050",
  //       "Website": "https://www.successacademymn.org/",
  //       "Latitude": 44.8548095,
  //       "Longitude": -93.2644318,
  //       "City": "Bloomington",
  //       "Levels": "Elementary"
  //     },
  //     {
  //       "Name": "Terra Nova School",
  //       "Slug": "terra-nova-school",
  //       "YearStarted": 2015,
  //       "Model": "PBL, Environmental",
  //       "ContactPhone": "952-852-0129",
  //       "Website": "http://jgesa.org/",
  //       "Latitude": 45.2732761,
  //       "Longitude": -94.0538593,
  //       "City": "Maple Lake",
  //       "Levels": "Middle, High"
  //     },
  //     {
  //       "Name": "The Journey School",
  //       "Slug": "the-journey-school",
  //       "YearStarted": 2019,
  //       "Model": "Individualized",
  //       "ContactPhone": "(612) 389-1579",
  //       "Website": "https://www.thejourneyschool.org/",
  //       "Latitude": 44.964411,
  //       "Longitude": -93.1475159,
  //       "City": "St. Paul",
  //       "Levels": "Elementary"
  //     },
  //     {
  //       "Name": "Upper Mississippi Academy",
  //       "Slug": "upper-mississippi-academy",
  //       "YearStarted": 2013,
  //       "Model": "STEM",
  //       "ContactPhone": "651-528-8091",
  //       "Website": "https://umissacademy.org/",
  //       "Latitude": 44.9495214,
  //       "Longitude": -93.0974287,
  //       "City": "St. Paul",
  //       "Levels": "Middle, High"
  //     },
  //     {
  //       "Name": "Venture Academy",
  //       "Slug": "venture-academy",
  //       "YearStarted": 2013,
  //       "Model": "STEM, PSEO, PBL",
  //       "ContactPhone": "612-345-9040",
  //       "Website": "http://ventureacademies.org/",
  //       "Latitude": 44.9729701,
  //       "Longitude": -93.2185159,
  //       "City": "Minneapolis",
  //       "Levels": "Middle, High"
  //     },
  //     {
  //       "Name": "Watershed High School",
  //       "Slug": "watershed-high-school",
  //       "YearStarted": 2021,
  //       "Model": "STEM, Culturally Responsive",
  //       "ContactPhone": "612-452-2274",
  //       "Website": "http://www.watershedhs.org/",
  //       "Latitude": 44.9507264,
  //       "Longitude": -93.2565603,
  //       "City": "Richfield",
  //       "Levels": "High"
  //     }
  //   ]
  // }

  // Initialize the map
  const map = L.map("map").setView([46, -94], 6); // Set default center and zoom level

  // Add a tile layer to the map (you can choose other tile providers)
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution: "© OpenStreetMap contributors",
  //   }).addTo(map);

  //   // Iterate over the JSON data and create markers on the map
  //   jsonData.schools.forEach(function (school) {
  //     if (school.Latitude && school.Longitude) {
  //       const marker = L.marker([school.Latitude, school.Longitude]).addTo(map);

  //       // Create a popup for each marker with school information
  //       const popupContent = `
  //       <h6>${school.Name}</h6>

  //       ${
  //         school.Website
  //           ? `<a href="${school.Website}" target="_blank">${school.Website}</a>`
  //           : "N/A"
  //       }<br>
  //       <br>
  //       <b>Phone: </b>${school.ContactPhone}<br>
  //       <b>Year Started:</b> ${school.YearStarted}<br>
  //       <b>Grades: </b>${school.Levels} School<br>
  //       <b>Focus:</b> ${school.Model}<br>

  //       <p></p>
  //       <div style="display: flex; justify-content: end;">
  //       <button class = "button" class="is-small" onclick="window.location.href='/schools/${
  //         school.Slug
  //       }'">Learn More</button>
  //       </div>

  //     `;
  //       marker.bindPopup(popupContent);
  //     }
  //   });
  //
});
