describe('Pull Requests Data Extraction', () => {
  it('Should fetch open pull requests and export to CSV', () => {
    cy.request('https://api.github.com/repos/appwrite/appwrite/pulls')
      .then((response) => {
        // Map the response to the desired format
        const data = response.body.map((pr) => ({
          title: pr.title,
          created_at: pr.created_at,
          author: pr.user.login
        }));
        console.log(data);

        // Prepare the CSV data
        const csvHeader = 'Title,Created At,Author\n';
        const csvRows = data.map((d) => `${d.title},${d.created_at},${d.author}`).join('\n');
        const csvData = csvHeader + csvRows;

        // Write the CSV data to a file
        cy.writeFile('cypress/downloads/pull_requests.csv', csvData);
      });
  });
});
