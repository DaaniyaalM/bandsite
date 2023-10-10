// Sample concerts data with "artist" replaced by "venue"
const concertsData = [
  { date: "2021-09-06", venue: "Ronald Lane", location: "San Francisco, CA" },
  { date: "2021-09-21", venue: "Pier 3 East", location: "San Francisco, CA" },
  { date: "2021-10-15", venue: "View Lounge", location: "San Francisco, CA" },
  { date: "2021-11-06", venue: "Hyatt Agency", location: "San Francisco, CA" },
  {
    date: "2021-11-26",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  { date: "2021-12-15", venue: "Press Club", location: "San Francisco, CA" },
];

// Function to create and render concerts
function renderConcerts() {
  const concertsList = document.getElementById("concerts-list");
  const concertsTable = document.getElementById("concerts-table");

  // Clear the table body
  concertsList.innerHTML = "";

  // Iterate through the concertsData and create rows
  concertsData.forEach((concert) => {
    const row = document.createElement("tr");

    // Create and append cells for "Date" title and data
    const dateTitleCell = document.createElement("td");
    dateTitleCell.textContent = "Date:";
    dateTitleCell.classList.add("title-cell");
    row.appendChild(dateTitleCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = concert.date;
    dateCell.classList.add("numerical-date-cell"); // Add a class to numerical date cells
    row.appendChild(dateCell);

    // Create and append cells for "Venue" title and data
    const venueTitleCell = document.createElement("td");
    venueTitleCell.textContent = "Venue:";
    venueTitleCell.classList.add("title-cell");
    row.appendChild(venueTitleCell);

    const venueCell = document.createElement("td");
    venueCell.textContent = concert.venue; // Use "venue" instead of "artist"
    row.appendChild(venueCell);

    // Create and append cells for "Location" title and data
    const locationTitleCell = document.createElement("td");
    locationTitleCell.textContent = "Location:";
    locationTitleCell.classList.add("title-cell");
    row.appendChild(locationTitleCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = concert.location;
    row.appendChild(locationCell);

    // Create and append a "Buy Tickets" button
    const buyTicketsCell = document.createElement("td");
    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.textContent = "Buy Tickets";
    buyTicketsButton.classList.add("buy-tickets-button");
    buyTicketsCell.appendChild(buyTicketsButton);
    row.appendChild(buyTicketsCell);

    // Append the row to the table body
    concertsList.appendChild(row);
  });

  // Show the table after populating data
  concertsTable.style.display = "table";
}

// Call the renderConcerts function to populate the table
renderConcerts();
