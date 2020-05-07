/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.name || !params.comment) {
    return Promise.reject({error: 'no name or comment'});
  }

	return {
    doc: {
      createdAt: new Date(),
	    mallname: params.mallname,
	    email: params.email,
	    adress: params.adress,
	    capacity: params.capacity,
	   
	  }
  };
}
