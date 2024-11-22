// Fetch and display available assessments
fetch('/assessments')
  .then(response => response.json())
  .then(data => {
    const assessmentList = document.getElementById('assessmentList');
    data.forEach(assessment => {
      const listItem = document.createElement('li');
      listItem.textContent = assessment.title;
      listItem.addEventListener('click', () => {
        window.location.href = `/assessment.html?id=${assessment.id}`;
      });
      assessmentList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching assessments:', error));
