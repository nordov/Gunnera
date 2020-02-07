export const fetchListings = data => (
    $.ajax({
      method: 'GET',
      url: 'api/listings',
      data
    })
  );
  
export const fetchListing = id => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
);
  
//   export const createReview = review => (
//     $.ajax({
//       method: 'POST',
//       url: 'api/reviews',
//       data: { review }
//     })
//   );
  
  export const postListing = benchForm => (
    $.ajax({
      method: 'POST',
      url: 'api/Listing',
      data: benchForm,
      contentType: false,
      processData: false
    })
  );