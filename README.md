# mouseion-frontend

### React web frontend for "Mouseion" music library.

*Why does this exist?...*
Things I want to do with this project:

- Be able to pull music from anywhere on the web.
  For example a song is stored on `somewebsite.com/file.mp3`:

  I want to be able to add a database entry and link the file location to that website.
- Highly specific sorting, very similar to how discogs.com shows music. Examples:
  - Seperation of albums, EPs, singles, compilations, mixes.
  - Linking artist pages to their aliases.
  - Allowing to view an artists true full discography, everything they've released under every alias.
  - Viewing releasaes by release labels rather than artists.
- Better queue options. Examples:
  - Listen to a shuffled series of albums, but their tracks are in order.
  - Listen to a shuffled series of artist aliases, but their albums are in order of release date.
  - Shuffle albums from a release label.
- Allow albums to have multiple versions. Examples:
  - Same album but one release has exclusive tracks.
  - Same album but some tracks are merged.
    [Example release 1](https://www.discogs.com/%E6%96%AD%E7%89%87%E5%8C%96%E3%81%95%E3%82%8C%E3%81%9F%E5%8F%8B%E4%BA%BA-Fragmented-Memories/master/884899)
    [Example release 2](https://www.discogs.com/%E6%96%AD%E7%89%87%E5%8C%96%E3%81%95%E3%82%8C%E3%81%9F%E5%8F%8B%E4%BA%BA-Fragmented-Memories/release/8942027)
- Better image options for albums, i.e. allow multiple album cover arts, allow each song in an album to have its own cover art.

## Technical Info
- Frontend is in React + Tailwind.css
- Database is Firebase, specifically Firestore
- File storage for music / album covers is external (but can be Firebase Cloudstore in the future)

## Todo
- Finish frontend lol
- Write an config for using Cloudstore to store music / album covers
- Electron build
- Write admin interface for editing data
- Write admin interface for uploading music / data

