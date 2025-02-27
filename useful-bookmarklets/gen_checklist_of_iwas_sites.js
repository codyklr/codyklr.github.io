// Generate Checklist of IWAS sites - Cody Keller

(function () {
  var table = document.querySelector(
    "#content > table:nth-child(2) > tbody > tr > td.c1 > table > tbody > tr > td > table:nth-child(2)"
  );

  if (table) {
    // Get all the rows in the table
    var rows = table.querySelectorAll("tr");

    // Initialize an array to store the links from the website links
    var websiteLinks = [];
    var schoolNames = [];

    // Loop through each row (skip the header row if necessary)
    for (var i = 1; i < rows.length; i++) {
      // Start from 1 to skip header row
      // Get all the cells in the current row
      var cells = rows[i].querySelectorAll("td");

      // Check if there are at least 11 columns in the current row
      if (cells.length >= 11) {
        // Get the link (assuming it's an anchor tag <a>) in the website links (index 10)
        var link = cells[10].querySelector("a");
        var schoolName = cells[0].querySelector("a").innerText;

        // Check if a link was found in the website links
        if (link) {
          // Add the link's href to the array
          schoolNames.push(schoolName);
          websiteLinks.push(link.href);
        }
      }
    }

    // Convert the array to plain text format with new lines


    var plainText = websiteLinks.map((link, index) => `[] ${schoolNames[index]}\n${link}`).join("\n\n");

    // Create a temporary textarea to copy the plain text to clipboard
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = plainText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();

    // Copy the text to clipboard
    document.execCommand("copy");

    // Clean up: remove the temporary textarea
    document.body.removeChild(tempTextarea);

    console.log("Website links copied to clipboard:");
    console.log(plainText);
  } else {
    console.error("Table not found on the page.");
  }
})();
