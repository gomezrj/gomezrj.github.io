// This function abstracts javascript in HTML into the current file. It is used to avoid
// having chained anchors in the papers page in order to have the arxiv and bibtex linked
// inside the card elements.
document.querySelectorAll('.card').forEach(card => {

  card.addEventListener('click', (event) => {
    const link = card.dataset.link;
    // This disables links below links firing
    if (event.target.closest('a')) {
      return;
    }
    //This makes divs clickable essentially
    if (link) {
      window.open(link, '_blank');
    }
  });
});