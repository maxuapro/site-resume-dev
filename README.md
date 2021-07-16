# This is the code of my site resume

The blog section is powered by Firebase, in order to make it work
you need to create:
- your own Firebase firestore and put your config data in  src/firebase/config.js file
- create a collection named "posts" in your firestore and populate it with at least
  2 documents of the following format:

    title: string,
    slug: string, (must be unique for the collection, cs it's used as ID)
    text: stringified HTML with no styling, like "<p>Hello</p>",
    date: time in Firebase timestamp format,
    description: string,
    image: url,
    categories: list with at least 1 string,

you can skip this step and use dummy data for posts from src/tempdata/tempPostData.js file,
although you gotta alter that data to the format as described above
and also change the getting data method in src/pages/Blog.js and BlogPostPage.js

Have a good one)