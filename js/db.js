// real-time listener
db
  .collection('recipes')
  .onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges());
    snapshot
      .docChanges()
      .forEach((change) => {
        //console.log(change.type, change.doc.id, change.doc.data());
        if (change.type === 'added') {
          renderRecipe(change.doc.data(), change.doc.id);
        } else if (change.type === 'removed') {
          // remove the document data from the web page
        }
      });
  });
