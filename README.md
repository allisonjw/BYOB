## BYOB(Build Your Own Backend)

[Allison Wagner](https://github.com/allisonjw)

Build Your Own Backend is a one week long solo project. My database was created using 2 datasets from [data.world](https://data.world/the-pudding/internet-boy-band-database). The `bands` file contains information about 55 boybands that had at least 1 song chart on the US version of the Billboard Hot 100 between 1980 and 2018. The `members` file contains all the bands members. 

---

## [Spring Prjoect Board](https://github.com/allisonjw/BYOB/projects/1)

---

## [Heroku Deployment](https://boy-bands-and-members.herokuapp.com/)

---

### Tech

This application was built using the following technologies:

- Node.js
- Express.js
- Knex
- PostgresQL

---

### Bands API Endpoints:

<details><summary>Full Details</summary>

<table>
  <thead>
    <tr>
      <th>Purpose</th>
      <th>URL</th>
      <th>Verb</th>
      <th>Request Body</th>
      <th>Sample Response (Happy Path)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Get all bands</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/bands</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge"> [{
        "id": 56,
        "bandName": "NSYNC",
        "band": "NSYNC",
        "highest_song": "It's Gonna Be Me",
        "featuring_artist": "no",
        "highest_song_vid": "https://www.youtube.com/watch?v=GQMlWwIXg3M",
        "created_at": "2020-01-31T19:50:36.552Z",
        "updated_at": "2020-01-31T19:50:36.552Z"
    },
    {
        "id": 57,
        "bandName": "112",
        "band": "112",
        "highest_song": "Peaches And Cream",
        "featuring_artist": "no",
        "highest_song_vid": "https://www.youtube.com/watch?v=wl2NCXzg1FQ",
        "created_at": "2020-01-31T19:50:36.560Z",
        "updated_at": "2020-01-31T19:50:36.560Z"
    }, {}, {}, {}]</code></td>
    </tr>
    <tr>
      <td>Get band by id: </td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/bands/:id/</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge">{
        "id": 58,
        "bandName": "2gether",
        "band": "2gether",
        "highest_song": "The Hardest Part of Breaking Up",
        "featuring_artist": "no",
        "highest_song_vid": "https://www.youtube.com/watch?v=HJ89lMXLJGA",
        "created_at": "2020-01-31T19:50:36.560Z",
        "updated_at": "2020-01-31T19:50:36.560Z"
    }</code></td>
    </tr>
    <tr>
      <td>Submit a new band</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/bands</code></td>
      <td>POST</td>
      <td><code class="language-plaintext highlighter-rouge">{ band: &lt;String&gt;, highest_song: &lt;String&gt;, featuring_artist: &lt;String&gt;, highest_song_vid: &lt;String&gt; }</code></td>
      <td><code class="language-plaintext highlighter-rouge">{
        "id": 59,
        "bandName": "5 Seconds of Summer",
        "band": "5 Seconds of Summer",
        "highest_song": "Amnesia",
        "featuring_artist": "no",
        "highest_song_vid": "https://www.youtube.com/watch?v=DCCJCILiX3o",
        "created_at": "2020-01-31T19:50:36.560Z",
        "updated_at": "2020-01-31T19:50:36.560Z"
    }</code></td>
    </tr>
    <tr>
      <td>Delete an existing band based on id</td>
      <td><code class="language-plaintext highlighter-rouge">api/v1/bands/:id/</code></td>
      <td>DELETE</td>
      <td>N/A</td>
      <td>204 status code (NO CONTENT in response body)</td>
    </tr>
  </tbody>
</table>

</details>

---


### Members API Endpoints:

<details><summary>Full Details</summary>

<table>
  <thead>
    <tr>
      <th>Purpose</th>
      <th>URL</th>
      <th>Verb</th>
      <th>Request Body</th>
      <th>Sample of Success Response (Happy Path)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Get all members</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/members</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge"> [{
        "id": 231,
        "name": "Justin Timberlake",
        "dob": "1/31/1981",
        "hair_color": "brown",
        "eyes": "blue",
        "band_name": "NSYNC",
        "created_at": "2020-01-31T19:50:36.600Z",
        "updated_at": "2020-01-31T19:50:36.600Z"
    },
    {
        "id": 241,
        "name": "Calum Hood",
        "dob": "1/25/1996",
        "hair_color": "black",
        "eyes": "brown",
        "band_name": "5 Seconds of Summer",
        "created_at": "2020-01-31T19:50:36.612Z",
        "updated_at": "2020-01-31T19:50:36.612Z"
    }, {}, {}, {}]</code></td>
    </tr>
    <tr>
      <td>Get member by id: </td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/members/:id/</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge">{
        "id": 261,
        "name": "Tony Borowiak",
        "dob": "10/12/1972",
        "hair_color": "brown",
        "eyes": "brown",
        "band_name": "All-4-One",
        "created_at": "2020-01-31T19:50:36.620Z",
        "updated_at": "2020-01-31T19:50:36.620Z"
    }</code></td>
    </tr>
    <tr>
      <td>Submit a new member</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/members</code></td>
      <td>POST</td>
      <td><code class="language-plaintext highlighter-rouge">{ name: &lt;String&gt;, dob: &lt;String&gt;, hair_color: &lt;String&gt;, eyes: &lt;String&gt;, band: &lt;String&gt; }</code></td>
      <td><code class="language-plaintext highlighter-rouge">{
        "id": 291,
        "name": "Teddy Riley",
        "dob": "10/8/1967",
        "hair_color": "black",
        "eyes": "brown",
        "band_name": "Blackstreet",
        "created_at": "2020-01-31T19:50:36.634Z",
        "updated_at": "2020-01-31T19:50:36.634Z"
    }</code></td>
    </tr>
    <tr>
      <td>Delete an existing member based on id</td>
      <td><code class="language-plaintext highlighter-rouge">api/v1/members/:id/</code></td>
      <td>DELETE</td>
      <td>N/A</td>
      <td>204 status code (NO CONTENT in response body)</td>
    </tr>
  </tbody>
</table>

</details>

---
