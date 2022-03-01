const apiKey = 'P_OfblJUsGOfJAx56FhbqtPDCK0BHSEGma7Z87AxC4xbCgS5EDbzzsB3Ch2zQHpIAeDWEDgiFej4-8U_HkBUutm_PUKP2VzLZrUhR-3G9G2yRRhzx8zsRCEoUgcdYnYx'
const obj = {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
}
const Yelp = {
    search(term, location, sortBy) {
        return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy, obj)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count

                    }));
                }
            });
    }
};

export default Yelp;